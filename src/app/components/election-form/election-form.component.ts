import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { filter, lastValueFrom, map } from 'rxjs';
import { AlertType, Election } from 'src/app/model';
import { AlertService, ElectionService } from 'src/app/services';

@Component({
  selector: 'app-election-form',
  templateUrl: './election-form.component.html',
  styleUrls: ['./election-form.component.scss']
})
export class ElectionFormComponent implements OnInit {

  form: FormGroup | null = null;

  constructor(
    private electionService: ElectionService,
    private fb: FormBuilder,
    private alertService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createForm();

    this.activatedRoute.paramMap.pipe(
      filter((params: ParamMap) => params.has('electionId')),
      map(params => params.get('electionId'))
    )
    .subscribe(electionId => {
      this.loadElection(electionId);
    });
  }

  private createForm() {
    this.form = this.fb.group({
      id: ['', []],
      name: ['', [Validators.required, Validators.min(3), Validators.max(100)]]
    });
  }

  private loadElection(electionId: string | null) {
    if (electionId) {
      // Carrega as informações do usuário no formulário.
      lastValueFrom(this.electionService.findById(electionId)).then(
        election => this.form?.setValue({id: election.id, name: election.name})
      ).catch(
        error => {
          console.log(error);
          this.alertService.show(AlertType.DANGER, '');
        }
      )
    }
  }

  save(): void {
    if (this.form?.invalid) {
      this.form.markAllAsTouched();
      this.alertService.show(AlertType.DANGER, 'Existem campos com erros de validação.');
      return;
    }
    const election: Election = this.form?.value as Election;
    lastValueFrom(this.electionService.save(election)).then(
      savedElection => {
        this.alertService.show(AlertType.SUCCESS, `Eleição ${savedElection.name} salva com sucesso.`);
        this.cancel();
      }
    ).catch(error => {
      console.log(error);
      this.alertService.show(AlertType.DANGER, `Erro encontrado ao salvar eleição ${election.name}.`);
    });
  }

  cancel(): void {
    this.router.navigateByUrl("/election/list");
  }

}

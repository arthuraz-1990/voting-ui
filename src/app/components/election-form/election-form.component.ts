import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      id: ['', []],
      name: ['', [Validators.required, Validators.min(3), Validators.max(100)]],
      startDate: ['', []],
      endDate: ['', []]
    });
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

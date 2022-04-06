import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { filter, lastValueFrom, map } from 'rxjs';
import { AlertType, Candidate } from 'src/app/model';
import { AlertService, CandidateService } from 'src/app/services';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.scss']
})
export class CandidateFormComponent implements OnInit {

  form: FormGroup | null = null;

  constructor(
    private candidateService: CandidateService,
    private fb: FormBuilder,
    private alertService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createForm();

    this.activatedRoute.paramMap.pipe(
      filter((params: ParamMap) => params.has('candidateId')),
      map(params => params.get('candidateId'))
    )
    .subscribe(candidateId => {
      this.loadCandidate(candidateId);
    });
  }

  private createForm() {
    this.form = this.fb.group({
      id: ['', []],
      name: ['', [Validators.required, Validators.min(3), Validators.max(100)]],
      imgUrl: ['', []]
    });
  }

  private loadCandidate(candidateId: string | null) {
    if (candidateId) {
      // Carrega as informações do usuário no formulário.
      lastValueFrom(this.candidateService.findById(candidateId)).then(
        candidate => this.form?.setValue({
          id: candidate.id, name: candidate.name, imgUrl: candidate.imgUrl
        })
      ).catch(
        error => {
          console.log(error);
          this.alertService.show(AlertType.DANGER, error.message);
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
    const candidate: Candidate = this.form?.value as Candidate;
    lastValueFrom(this.candidateService.save(candidate)).then(
      savedCandidate => {
        this.alertService.show(AlertType.SUCCESS, `Candidato ${savedCandidate.name} salvo com sucesso.`);
        this.cancel();
      }
    ).catch(error => {
      console.log(error);
      this.alertService.show(AlertType.DANGER, `Erro encontrado ao salvar candidato ${candidate.name}.`);
    });
  }

  cancel(): void {
    this.router.navigateByUrl("/candidate/list");
  }

}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CandidateFormComponent, CandidateListComponent,
  ElectionFormComponent, ElectionListComponent, HomeComponent } from "./components";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'election', children:
    [
      { path: 'list', component: ElectionListComponent },
      { path: 'edit', component: ElectionFormComponent },
      { path: 'edit/:electionId', component: ElectionFormComponent },
      { path: '*', pathMatch: 'full', redirectTo: 'list'}
    ]
  },
  { path: 'candidate', children:
    [
      { path: 'list', component: CandidateListComponent },
      { path: 'edit', component: CandidateFormComponent },
      { path: 'edit/:candidateId', component: CandidateFormComponent },
      { path: '*', pathMatch: 'full', redirectTo: 'list'}
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

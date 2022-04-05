import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ElectionFormComponent, ElectionListComponent } from "./components";

const routes: Routes = [
  { path: '/election', children:
    [
      { path: 'list', component: ElectionListComponent },
      { path: 'edit', component: ElectionFormComponent },
      { path: '*', pathMatch: 'full', redirectTo: 'list'}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

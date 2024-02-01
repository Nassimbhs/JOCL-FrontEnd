import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterpageComponent } from "./examples/registerpage/registerpage.component";
import { AddProjectComponent } from "./examples/addproject/addproject.component";
import { ProjectpageComponent } from "./examples/projetpage/projectpage.component";
import { LoginpageComponent } from "./examples/loginpage/loginpage.component";
import { ValidateurpageComponent } from "./examples/validateurpage/validateurpage.component";
import { RegistervalidComponent } from "./examples/registervalid/registervalid.component";
import { LoginValidComponent } from "./examples/login-valid/login-valid.component";
import { DetailprojetComponent } from "./examples/detailprojet/detailprojet.component";

const routes: Routes = [
  { path: "", redirectTo: "examples/login-president", pathMatch: "full" },
  { path: "examples/detail/:id", component: DetailprojetComponent },
  { path: "examples/register-validateur", component: RegistervalidComponent },
  { path: "examples/register-president", component: RegisterpageComponent },
  { path: "examples/add-project", component: AddProjectComponent },
  { path: "examples/president-page", component: ProjectpageComponent },
  { path: "examples/validateur-page", component: ValidateurpageComponent },
  { path: "examples/login-president", component: LoginpageComponent },
  { path: "examples/login-validateur", component: LoginValidComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      scrollOffset: [0, 64]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

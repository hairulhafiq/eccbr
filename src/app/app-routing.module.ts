import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { MainComponent } from './Main/Main.component';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "Login" },
  { path: "Login", component: LoginComponent },
  { path: "main", component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

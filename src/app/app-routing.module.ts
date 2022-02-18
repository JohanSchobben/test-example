import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExamsComponent} from "./exams/exams.component";

const routes: Routes = [
  { path: "", component: ExamsComponent },
  { path: ":id", component: ExamsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

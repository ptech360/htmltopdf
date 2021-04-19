import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmltopdfComponent } from './htmltopdf/htmltopdf.component';

const routes: Routes = [
  { path: '', component: HtmltopdfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

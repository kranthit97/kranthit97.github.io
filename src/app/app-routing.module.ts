import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSuppportComponent } from './customer-suppport/customer-suppport.component';

const routes: Routes = [
  {path:'', component :CustomerSuppportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

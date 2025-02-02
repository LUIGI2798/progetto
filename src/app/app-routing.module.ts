import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrandComponent } from './brand/brand.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'brand/:name', component: BrandComponent }, 
  { path: '', redirectTo: '' } 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

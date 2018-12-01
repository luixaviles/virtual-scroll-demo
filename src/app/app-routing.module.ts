import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TempComponent } from './temp/temp.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

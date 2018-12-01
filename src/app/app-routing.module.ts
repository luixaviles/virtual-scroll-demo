import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdkScrollComponent } from './cdk-scroll/cdk-scroll.component';

const routes: Routes = [
  {
    path: '',
    component: CdkScrollComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

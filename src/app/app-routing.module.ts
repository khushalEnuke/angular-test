import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './customer/list/list.component';
import { DetailComponent } from './customer/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    // resolve: { users: CustomerResolver }
  },
  {
    path: ':id/detail',
    component: DetailComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

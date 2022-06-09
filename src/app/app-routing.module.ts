import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'fe', pathMatch: 'full'
  },
  {
    path: 'fe', loadChildren: (() => import('./frontend/frontend.module').then(m => m.FrontendModule))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

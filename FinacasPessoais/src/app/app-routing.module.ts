import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContasAPagarComponent } from './Lancamentos/contasAPagar/contasAPagar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {path: 'ContasAPagar', component: ContasAPagarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';

const routes: Routes = [
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'chauffeur', component: ChauffeurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

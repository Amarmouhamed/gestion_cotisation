import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCotisationComponent } from './cotisation/add-cotisation/add-cotisation.component';
import { EditCotisationComponent } from './cotisation/edit-cotisation/edit-cotisation.component';
import { HistoriqueCotisationComponent } from './cotisation/historique-cotisation/historique-cotisation.component';
import { ListCotisationComponent } from './cotisation/list-cotisation/list-cotisation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AddMembreComponent } from './membre/add-membre/add-membre.component';
import { EditMembreComponent } from './membre/edit-membre/edit-membre.component';
import { ListMembreComponent } from './membre/list-membre/list-membre.component';
import { ParametreComponent } from './parametre/parametre.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'cotisation', component: HistoriqueCotisationComponent },
      { path: 'cotisation/add', component: AddCotisationComponent },
      { path: 'cotisation/edit/:id_cotisation', component: EditCotisationComponent },
      { path: 'membre', component: ListMembreComponent },
      { path: 'membre/add', component: AddMembreComponent },
      { path: 'membre/edit/:id_membre', component: EditMembreComponent },
      { path: 'profil', component: ProfilComponent },
      { path: 'parametre', component: ParametreComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
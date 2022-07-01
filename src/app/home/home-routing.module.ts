import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAmandeComponent } from './amande/list-amande/list-amande.component';
import { AddCotisationComponent } from './cotisation/add-cotisation/add-cotisation.component';
import { EditCotisationComponent } from './cotisation/edit-cotisation/edit-cotisation.component';
import { HistoriqueCotisationComponent } from './cotisation/historique-cotisation/historique-cotisation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AddMembreComponent } from './membre/add-membre/add-membre.component';
import { DetailsMembreComponent } from './membre/details-membre/details-membre.component';
import { EditMembreComponent } from './membre/edit-membre/edit-membre.component';
import { ListMembreComponent } from './membre/list-membre/list-membre.component';
import { ParametreComponent } from './parametre/parametre.component';
import { ProfilComponent } from './profil/profil.component';
import { ListRealisationComponent } from './realisation/list-realisation/list-realisation.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'cotisation', component: HistoriqueCotisationComponent },
      { path: 'cotisation/add', component: AddCotisationComponent },
      { path: 'cotisation/edit/:id_cotisation', component: EditCotisationComponent },
      { path: 'cotisation/:id_periode', component: HistoriqueCotisationComponent },
      { path: 'membre', component: ListMembreComponent },
      { path: 'membre/add', component: AddMembreComponent },
      { path: 'membre/edit/:id_membre', component: EditMembreComponent },
      { path: 'membre/:id_membre', component: DetailsMembreComponent },
      { path: 'amande', component: ListAmandeComponent },
      { path: 'realisation', component: ListRealisationComponent },
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

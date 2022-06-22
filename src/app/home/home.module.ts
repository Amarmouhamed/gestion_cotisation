import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AddMembreComponent } from './membre/add-membre/add-membre.component';
import { ListMembreComponent } from './membre/list-membre/list-membre.component';
import { AddCotisationComponent } from './cotisation/add-cotisation/add-cotisation.component';
import { ListCotisationComponent } from './cotisation/list-cotisation/list-cotisation.component';
import { HistoriqueCotisationComponent } from './cotisation/historique-cotisation/historique-cotisation.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { ProfilComponent } from './profil/profil.component';
import { ParametreComponent } from './parametre/parametre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditMembreComponent } from './membre/edit-membre/edit-membre.component';
import { EditCotisationComponent } from './cotisation/edit-cotisation/edit-cotisation.component';

@NgModule({
  declarations: [
    HomeComponent,
    AddMembreComponent,
    ListMembreComponent,
    AddCotisationComponent,
    ListCotisationComponent,
    HistoriqueCotisationComponent,
    SidebarComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    ProfilComponent,
    ParametreComponent,
    EditMembreComponent,
    AddCotisationComponent,
    EditCotisationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,

  ]
})
export class HomeModule { }

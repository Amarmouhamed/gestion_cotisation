import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AddMembreComponent } from './membre/add-membre/add-membre.component';
import { ListMembreComponent } from './membre/list-membre/list-membre.component';
import { AddCotisationComponent } from './cotisation/add-cotisation/add-cotisation.component';
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
import { InlinePeriodeComponent } from './cotisation/inline-periode/inline-periode.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { CotisationMoisComponent } from './dashboard/cotisation-mois/cotisation-mois.component';
import { CotisationGlobalComponent } from './dashboard/cotisation-global/cotisation-global.component';
import { GraphEvolutionMontantGlobalComponent } from './dashboard/graph-evolution-montant-global/graph-evolution-montant-global.component';
import { DetailsMembreComponent } from './membre/details-membre/details-membre.component';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  declarations: [
    HomeComponent,
    AddMembreComponent,
    ListMembreComponent,
    AddCotisationComponent,
    HistoriqueCotisationComponent,
    SidebarComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    ProfilComponent,
    ParametreComponent,
    EditMembreComponent,
    AddCotisationComponent,
    EditCotisationComponent,
    InlinePeriodeComponent,
    CotisationMoisComponent,
    CotisationGlobalComponent,
    GraphEvolutionMontantGlobalComponent,
    DetailsMembreComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2GoogleChartsModule,
    NgxPrintModule
  ]
})
export class HomeModule { }

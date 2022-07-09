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
import { InlineSelectedMembreComponent } from './cotisation/inline-selected-membre/inline-selected-membre.component';
import { ListAmandeComponent } from './amande/list-amande/list-amande.component';
import { ListRealisationComponent } from './realisation/list-realisation/list-realisation.component';
import { ParametreAmandeComponent } from './parametre/parametre-amande/parametre-amande.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { InlinePeriodeAmandeComponent } from './amande/inline-periode-amande/inline-periode-amande.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ItemCotisationEncaisseeComponent } from './cotisation/item-cotisation-encaissee/item-cotisation-encaissee.component';
import { ItemCotisationNonEncaisseeComponent } from './cotisation/item-cotisation-non-encaissee/item-cotisation-non-encaissee.component';
import { ItemMembreComponent } from './membre/item-membre/item-membre.component';
import { ItemMembreAmandeComponent } from './amande/item-membre-amande/item-membre-amande.component';
import { ItemAmandeNonEncaisseeComponent } from './amande/item-amande-non-encaissee/item-amande-non-encaissee.component';
import { ItemAmandeEncaisseeComponent } from './amande/item-amande-encaissee/item-amande-encaissee.component';
import { ParametrePeriodeComponent } from './parametre/parametre-periode/parametre-periode.component';
import { AddPeriodeComponent } from './periode/add-periode/add-periode.component';
import { InlinePeriodePreviewComponent } from './periode/inline-periode-preview/inline-periode-preview.component';

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
    DetailsMembreComponent,
    InlineSelectedMembreComponent,
    ListAmandeComponent,
    ListRealisationComponent,
    ParametreAmandeComponent,
    InlinePeriodeAmandeComponent,
    ItemCotisationEncaisseeComponent,
    ItemCotisationNonEncaisseeComponent,
    ItemMembreComponent,
    ItemMembreAmandeComponent,
    ItemAmandeNonEncaisseeComponent,
    ItemAmandeEncaisseeComponent,
    ParametrePeriodeComponent,
    AddPeriodeComponent,
    InlinePeriodePreviewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2GoogleChartsModule,
    NgxPrintModule,
    ProgressbarModule,
    PaginationModule
  ]
})
export class HomeModule { }

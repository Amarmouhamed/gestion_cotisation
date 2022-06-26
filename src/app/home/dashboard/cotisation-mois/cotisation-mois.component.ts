import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';

@Component({
  selector: 'app-cotisation-mois',
  templateUrl: './cotisation-mois.component.html',
  styleUrls: ['./cotisation-mois.component.css']
})
export class CotisationMoisComponent implements OnInit {

  public chart_data: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: [
      ['Critère', 'nombre'],
      ['Encaissée', 5],
      ['Non encaissée', 7],
      ['Retard', 2],
      ['Amande', 2],
    ],
    //firstRowIsData: true,
    options: {
      title: 'Cotisations du mois',
      // backgroundColor:"black",
      colors:["green","red","yellow","blue"],
      legend:{
        position:"right",
        
      }
    },
  };
  constructor() { }

  ngOnInit(): void {
  }

}

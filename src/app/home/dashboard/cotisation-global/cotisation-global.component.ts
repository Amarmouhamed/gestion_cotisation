import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';

@Component({
  selector: 'app-cotisation-global',
  templateUrl: './cotisation-global.component.html',
  styleUrls: ['./cotisation-global.component.css']
})
export class CotisationGlobalComponent implements OnInit {

  public chart_data: GoogleChartInterface = {
    chartType: GoogleChartType.LineChart,
    dataTable: [
      ['Mois', 'Success',"Non encaissées","Retard"],
      ['02-22', 10,0,2],
      ['03-22', 9,0,3],
      ['04-22', 12,0,0],
      ['05-22', 7,3,2],
      ['06-22', 8,3,1],
    ],
    //firstRowIsData: true,
    options: {
      title: 'Participation des membres par mois',
      height:300,
      backgroundColor:"#F3F6F9",
      colors:["green","red","yellow","blue"],
      legend:{
        position:"bottom",
        
      }
    },
  };
  constructor() { }

  ngOnInit(): void {
  }

}

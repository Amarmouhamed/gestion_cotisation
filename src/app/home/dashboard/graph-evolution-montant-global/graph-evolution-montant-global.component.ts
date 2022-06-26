import { Component, Input, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';

@Component({
  selector: 'app-graph-evolution-montant-global',
  templateUrl: './graph-evolution-montant-global.component.html',
  styleUrls: ['./graph-evolution-montant-global.component.css']
})
export class GraphEvolutionMontantGlobalComponent implements OnInit {
  @Input()
  data_inputed:any=[]
  public chart_data: GoogleChartInterface = {
    chartType: GoogleChartType.LineChart,
    //firstRowIsData: true,
    dataTable:this.data_inputed,
    options: {
      title: 'Evolution du montant global des cotisations',
      height:300,
      backgroundColor:"#F3F6F9",
      colors:["green","blue","red","yellow"],
      legend:{
        position:"bottom",
        
      }
    },
  };
  constructor() {
    this.chart_data.dataTable=[
      ['Mois', "Motant Attendu",'Montant Recu'],
      ['02-22', 0, 0],
      ['03-22', 0, 0],
      ['04-22', 0, 0],
      ['05-22', 0, 0],
      ['06-22', 0, 0],
    ]
    
   }

  ngOnInit(): void {
  }
  update_chart(data:any){
    this.chart_data.dataTable=data
  }

}

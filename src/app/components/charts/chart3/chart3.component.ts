import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.scss'],
})
export class Chart3Component implements OnInit {
  // Radar
  ngOnInit(){}
  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public chartColors: any[] = [
    { 
      backgroundColor:["DarkBlue", "Blue", "LightBlue", "Teal"] 
    }];
  public barChartData: ChartDataSets[] = [
    { data: [10, 20, 30], label: 'Closed Lost', stack: 'a' },
    { data: [10, 20, 30], label: 'Closed Won', stack: 'a' },
    { data: [10, 20, 30], label: 'MeetingScheduled', stack: 'a' },
    { data: [10, 20, 30], label: 'New', stack: 'a' },
    { data: [10, 20, 30], label: 'Quote Sent', stack: 'a' },

  ];
  public barChartLabels: string[] = ['2010', '2011', '2012'];

  constructor() { }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}


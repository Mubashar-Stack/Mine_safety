import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Chart from 'chart.js';
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";



@Component({
  selector: 'app-sensor-detail',
  templateUrl: './sensor-detail.component.html',
  styleUrls: ['./sensor-detail.component.scss']
})
export class SensorDetailComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  
  title: string;
  sensorId: any;
  gasname= [{name: "CO",state: "Online",lastValue: "0 PPM",inMine: "Yes",type: "Gas"},{name: "Airflow",
  state: "Online",
  lastValue: "166.66 m3/s",
  inMine: "Yes",type: "AirFlow"},{name: "Humidity",
  state: "Online",
  lastValue: "78.3 %",
  inMine: "Yes",type: "Humidity"},{name: "NH3",
  state: "Online",
  lastValue: "0 PPM",
  inMine: "Yes",type: "Gas"},{name: "NO2",
  state: "Offline",
  lastValue: "0 PPM",
  inMine: "Yes",type: "Gas"},{name: "O2",
  state: "Online",
  lastValue: "20.6 %",
  inMine: "Yes",type: "Gas"},{name: "Meth",
  state: "Online",
  lastValue: "0 %",
  inMine: "Yes",type: "Gas"},{name: "Temperature",
  state: "Online",
  lastValue: "25.3 deg C",
  inMine: "Yes",type: "Temperature"}];

  result:any;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.title = "SenSor Detail";
    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];
    
    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });
    
    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});
    // edit product
    this.sensorId = +this.route.snapshot.paramMap.get("id");
    
    if(this.sensorId !== null) {
      this.getSensorData(this.sensorId);
    }
  }
  
  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

  getSensorData(data:number) {
    this.result = this.gasname[data];
  }


}

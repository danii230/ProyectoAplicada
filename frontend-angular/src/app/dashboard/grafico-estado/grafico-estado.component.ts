import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { IBarChart } from 'src/app/interfaces/charts.interface';
import { DATA_BAR_CHAR } from './bar-chart';

@Component({
  selector: 'app-grafico-estado',
  templateUrl: './grafico-estado.component.html',
  styleUrls: ['./grafico-estado.component.css']
})
export class GraficoEstadoComponent implements OnInit {

  title = 'dashboard';
  chart = [];
  ngOnInit(): void {
    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };



  }
  
}

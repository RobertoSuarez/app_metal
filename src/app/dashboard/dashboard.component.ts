import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { UserService } from '../core/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  data: any[] = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: this.data.map(row => row.year),
    datasets: [
      {
        label: 'Series A',
        data: this.data.map(row => row.count),
      }
    ]
  }

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
  }

  public lineChartLegend = false;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  cerrar() {
    this.userService.cerrarSesion();
    this.router.navigate(['/login']);
  }

}

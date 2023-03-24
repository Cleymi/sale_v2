import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ConfigService } from '@services/app.config.service';
import { AppConfig } from '@models/appconfig';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  items: MenuItem[];

  products: any[];

  chartData: any;

  chartOptions: any;

  subscription: Subscription;

  config: AppConfig;

  constructor(
    public configService: ConfigService
  ) { }

  ngOnInit() {
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
      this.updateChartOptions();
    });
    this.products = []

    this.items = [
      { label: 'Nuevo', icon: 'pi pi-fw pi-plus' },
      { label: 'Eliminar', icon: 'pi pi-fw pi-minus' }
    ];

    this.chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Activos',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: '#00bb7e',
          borderColor: '#00bb7e',
          tension: .4
        },
        {
          label: 'Inactivos',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          backgroundColor: '#fd0034',
          borderColor: '#fd0034',
          tension: .4
        }
      ]
    };
  }

  updateChartOptions() {
    if (this.config.dark)
      this.applyDarkTheme();
    else
      this.applyLightTheme();

  }

  applyDarkTheme() {
    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#ebedef'
          },
          grid: {
            color: 'rgba(160, 167, 181, .3)',
          }
        },
        y: {
          ticks: {
            color: '#ebedef'
          },
          grid: {
            color: 'rgba(160, 167, 181, .3)',
          }
        },
      }
    };
  }

  applyLightTheme() {
    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef',
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef',
          }
        },
      }
    };
  }

}

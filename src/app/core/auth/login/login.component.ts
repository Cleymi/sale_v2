import { Component, OnInit } from '@angular/core';
import { ConfigService } from '@service/app.config.service';
import { AppConfig } from '@models/appconfig';
import { Subscription } from 'rxjs';
import { AuthService } from '@service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
        :host ::ng-deep .p-password{
          width: 100%;
        }
    `]
})
export class LoginComponent implements OnInit {

  valCheck: string[] = ['remember'];
  password: string;
  config: AppConfig;
  subscription: Subscription;

  constructor(
    public configService: ConfigService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.configuration()
  }

  configuration() {
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
    });
  }

  logIn() {
    this.authService.logIn()
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

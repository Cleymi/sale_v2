import { Component, OnInit } from '@angular/core';
import { ConfigService } from '@services/app.config.service';
import { AppConfig } from '@models/appconfig';
import { Subscription } from 'rxjs';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Validations } from '@app/core/hooks/validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  valCheck: string[] = ['remember'];
  config: AppConfig;
  subscription: Subscription;

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    public configService: ConfigService,
    private authService: AuthService,
    private fb: UntypedFormBuilder,
    private router: Router,
    private validations: Validations,
  ) {}

  ngOnInit(): void {
    this.configuration();
  }

  configuration() {
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe((config) => {
      this.config = config;
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) return;
    this.authService.login(this.loginForm.value).subscribe((res) => {
      if (res.data.user.super_user) {
        this.router.navigate(['home']);
      } else {
        this.router.navigate(['record-sale']);
      }
    });
  }

  getErrorMessage(field: string): string {
    return this.validations.getErrorMessage(field, this.loginForm);
  }

  isValidField(field: string): boolean {
    return this.validations.isValidField(field, this.loginForm);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

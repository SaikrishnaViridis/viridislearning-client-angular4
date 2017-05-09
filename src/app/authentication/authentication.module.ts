import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LinkedinIntegrationComponent } from './linkedin-integration/linkedin-integration.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, RegistrationComponent, ResetPasswordComponent, LinkedinIntegrationComponent]
})
export class AuthenticationModule { }

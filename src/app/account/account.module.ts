import { AuthenticationAction } from './actions/authentication';
import { UsersAction } from './actions/users';
import { AuthenticationService } from './shared/authentication.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './containers/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService,
    UsersAction,
    AuthenticationAction
  ],
  declarations: [LoginComponent]
})
export class AccountModule { }

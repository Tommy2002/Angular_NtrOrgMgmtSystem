import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './../../shared/authentication.service';
import { FormErrorMessages } from './form-error-messages';
import { UserFactory } from './../../shared/user-factory';
import { User } from './../../shared/user';
import { IAppState } from './../../../app.state';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { select } from '@angular-redux/store';


@Component({
  selector: 'ntr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  @select((state: IAppState) => state.users.me.username) me$:
  Observable<User>;

  user = UserFactory.empty();
  errors: { [key: string]: string } = {};
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.myForm = this.fb.group({
      username: [this.user.username, [
        Validators.required,
        Validators.maxLength(150)]],
      password: [this.user.password, [
        Validators.required,
        Validators.maxLength(128)]]
    });

    this.myForm.statusChanges.subscribe(() => this.updateErrorMessages());
  }

  submitForm() {
    const user: User = UserFactory.fromObject(this.myForm.value);
    this.authenticationService.login(user.username, user.password)
      .subscribe(result => {
        if (result === true) {
          console.log("Erfolgreich angemeldet");
        } else {
          console.log("Fehlerhafte anmeldung");
          this.errors['non_fields_errors'] = 'Benutzername oder Password falsch';
        }
      });
    //this.router.navigate(['/']);
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of FormErrorMessages) {
      const control = this.myForm.get(message.forControl);
      if (control &&
        control.dirty &&
        control.invalid &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]) {
        this.errors[message.forControl] = message.text;
      }
    }
  }
}

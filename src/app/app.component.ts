import { User } from './account/shared/user';
import { Observable } from 'rxjs/Observable';
import { IAppState } from './app.state';
import { select } from '@angular-redux/store';
import { Component } from '@angular/core';


@Component({
  selector: 'ntr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @select((state: IAppState) => state.users.me.username) me$:
    Observable<User>;

  title = 'ntr works!';
}

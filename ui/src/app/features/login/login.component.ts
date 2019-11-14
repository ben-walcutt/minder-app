import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/index';
import { UserLoginSucessAction } from 'src/app/store/application';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: string = '';
  private password: string = '';

  constructor(
    private store: Store<fromStore.State>,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.store.dispatch(new UserLoginSucessAction(this.email));
  }

}

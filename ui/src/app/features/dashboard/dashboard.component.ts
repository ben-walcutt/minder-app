import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../store/index';
import * as fromApplication from '../../store/application/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private user$: Observable<string>;

  constructor(
    private store: Store<fromStore.State>
  ) {
    this.user$ = this.store.pipe(select(fromApplication.getUser));
  }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new fromApplication.UserLogoutAction());
  }

}

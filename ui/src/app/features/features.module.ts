import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
    ToastModule,
    SharedModule
  ],
  exports: [LoginModule]
})
export class FeaturesModule { }

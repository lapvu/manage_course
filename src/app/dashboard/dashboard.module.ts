import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard.component";
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [
    DashboardComponent,
    ProfilePageComponent
  ]
})
export class DashboardModule { }

    import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { NgxCircularProgressbarModule } from '@fivethree/ngx-circular-progressbar'; // If you use the progress bar library

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent } // Define the dashboard route
    ]),
    NgxCircularProgressbarModule // Import any additional modules required
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {}

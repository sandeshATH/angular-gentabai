import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  accountBalance: number = 427000;
  teamMembers: number = 15;
  totalTurnover: number = 850000;
  performance: number = 85;
}

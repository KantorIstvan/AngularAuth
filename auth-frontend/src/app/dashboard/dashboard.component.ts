import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false,
})
export class DashboardComponent implements OnInit {
  welcomeMessage = '';

  constructor(private http: HttpClient, public auth: AuthService) {}

  ngOnInit() {
    this.http
      .get<{ message: string }>('/api/dashboard', {
        headers: { Authorization: `Bearer ${this.auth.getToken()}` },
      })
      .subscribe({
        next: (res) => (this.welcomeMessage = res.message),
        error: () => this.auth.logout(),
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  cards = [];
  constructor( private router: Router, private service: ServicesService) {}
  ngOnInit(): void {
    for (let i = 0; i < 8; i++) {
      this.cards.push(i);
    }
  }
  dashboardlist(){
this.router.navigateByUrl('dashboard-list')
this.service.categoryName.next('Strategy Management Dashboards')
  }
}
// dashboard-list
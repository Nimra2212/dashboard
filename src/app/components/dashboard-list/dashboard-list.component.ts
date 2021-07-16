import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {
  
  cards = [];
  constructor( private service: ServicesService) {}
  ngOnInit(): void {
    for (let i = 0; i < 4; i++) {
      this.cards.push(i);
    }
  }
  openDialog(){
    this.service.openDialog();
  }
  delete(i){
    this.cards.splice(i,1)
  }

}

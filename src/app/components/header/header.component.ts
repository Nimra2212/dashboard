import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  name: string = 'Mohammad Abdullah';
  image: string = '';
  logo: string = '';
  disabled = false;
  
  constructor(private service: ServicesService) {}

  ngOnInit(): void {
    this.service.subject.subscribe((logo) => {
      this.logo = logo;
    });
    this.service.notifications.subscribe((image) => {
      this.image = image;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private service: ServicesService, private router: Router) {}

  ngOnInit(): void {
    this.service.subject.subscribe((logo) => {
      this.logo = logo;
    });
    this.service.notifications.subscribe((image) => {
      this.image = image;
    });
  }
  logoHome(){
this.router.navigateByUrl('');
this.service.categoryName.next('Category')
this.service.dialogueField.next(true)
  }
}

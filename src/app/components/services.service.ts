import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

subject = new BehaviorSubject('/assets/images/logo.svg');
image = new BehaviorSubject('/assets/images/category-icon.svg')
notifications = new BehaviorSubject('/assets/images/notifications-icon.svg')
  constructor() { }
}

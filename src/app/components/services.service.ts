import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { DialogueComponent } from './header2/header2.component';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

subject = new BehaviorSubject('/assets/images/logo.svg');
image = new BehaviorSubject('/assets/images/category-icon.svg')
notifications = new BehaviorSubject('/assets/images/notifications-icon.svg');
categoryName = new BehaviorSubject('Category')
title = new BehaviorSubject('Category')
dialogueField = new BehaviorSubject(true)
  constructor( public dialog: MatDialog) { }


openDialog() {
  const dialogRef = this.dialog.open(DialogueComponent, {
    position: { top: '30px' },
  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log(`Dialog result: ${result}`);
  });
}
}
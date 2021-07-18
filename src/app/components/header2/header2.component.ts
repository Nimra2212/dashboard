import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss'],
})
export class Header2Component implements OnInit {
  @HostListener('click', ['$event'])
  public onClick(event: any): void {
    event.stopPropagation();
  }
  title: string = '';
  categoryName: string = '';
  theme: Theme = 'dark-theme';
  image: string = '';
  constructor(
    public dialog: MatDialog,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private service: ServicesService
  ) {}
  ngOnInit(): void {
    this.initializeTheme();
    this.service.image.subscribe((image) => {
      this.image = image;
    });
    this.service.categoryName.subscribe((name) => {
      this.categoryName = name;
    });
    this.service.title.subscribe((title) => {
      this.title = title;
    });
  }
  openDialog() {
    this.service.openDialog();
  }
  switchTheme() {
    this.document.body.classList.replace(
      this.theme,
      this.theme === 'light-theme'
        ? (this.theme = 'dark-theme')
        : (this.theme = 'light-theme')
    );
    if (this.theme == 'dark-theme') {
      this.service.subject.next('/assets/images/logo.svg');
      this.service.image.next('/assets/images/category-icon.svg');
      this.service.notifications.next('/assets/images/notifications-icon.svg');
    } else {
      this.service.subject.next('/assets/images/logo-light.svg');
      this.service.image.next('/assets/images/category-icon-light.svg');
      this.service.notifications.next(
        '/assets/images/notifications-icon -light.svg'
      );
    }
  }
  initializeTheme = (): void =>
    this.renderer.addClass(this.document.body, this.theme);
}

export type Theme = 'dark-theme' | 'light-theme';

@Component({
  selector: 'dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./header2.component.scss'],
})
export class DialogueComponent implements OnInit {
  form: FormGroup;
  dialoguefield = false;
  languages = [];
  title: string = '';
  selectedLanguage: string = 'English';
  states = ['English', 'Arabic', 'French', 'Chinese'];
  constructor(private service: ServicesService, private router: Router,private formBuilder: FormBuilder,) {}

  ngOnInit() {
    this.setupValidations();
    this.service.title.subscribe((title) => {
      this.title = title;
    });
    this.service.dialogueField.subscribe((field)=>{
      this.dialoguefield = field
    })
  }
  addLanguages() {
    for (let i = 1; i < 2; i++) {
      this.languages.push(i);
      ++i;
    }
  }
  deleteLanguage(i){
    this.languages.splice(i,1)
  }
  create(){
    this.router.navigateByUrl('dashboard-list');
    this.service.dialogueField.next(false)
    this.service.categoryName.next('Strategy Management Dashboards');
    this.service.title.next('Dashboard');
  }
  setupValidations() {
    this.form = this.formBuilder.group({
      name: new FormControl(''),
      user: new FormControl(''),
      roles: new FormControl(''),
      gridSize: new FormControl(''),
      fieldName : new FormControl('')
    });
  }
}

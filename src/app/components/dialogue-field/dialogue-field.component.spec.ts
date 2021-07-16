import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueFieldComponent } from './dialogue-field.component';

describe('DialogueFieldComponent', () => {
  let component: DialogueFieldComponent;
  let fixture: ComponentFixture<DialogueFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

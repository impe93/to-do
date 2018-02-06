import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiTaskComponent } from './aggiungi-task.component';

describe('AggiungiTaskComponent', () => {
  let component: AggiungiTaskComponent;
  let fixture: ComponentFixture<AggiungiTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggiungiTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

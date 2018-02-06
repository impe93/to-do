import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCoseDaFareComponent } from './lista-cose-da-fare.component';

describe('ListaCoseDaFareComponent', () => {
  let component: ListaCoseDaFareComponent;
  let fixture: ComponentFixture<ListaCoseDaFareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCoseDaFareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCoseDaFareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

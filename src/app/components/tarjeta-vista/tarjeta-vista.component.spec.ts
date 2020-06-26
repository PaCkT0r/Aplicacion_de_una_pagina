import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaVistaComponent } from './tarjeta-vista.component';

describe('TarjetaVistaComponent', () => {
  let component: TarjetaVistaComponent;
  let fixture: ComponentFixture<TarjetaVistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaVistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

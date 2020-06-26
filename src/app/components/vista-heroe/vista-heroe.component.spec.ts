import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaHeroeComponent } from './vista-heroe.component';

describe('VistaHeroeComponent', () => {
  let component: VistaHeroeComponent;
  let fixture: ComponentFixture<VistaHeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

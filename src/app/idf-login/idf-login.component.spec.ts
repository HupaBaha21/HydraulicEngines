import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdfLoginComponent } from './idf-login.component';

describe('IdfLoginComponent', () => {
  let component: IdfLoginComponent;
  let fixture: ComponentFixture<IdfLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdfLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdfLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

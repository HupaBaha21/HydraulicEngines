import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelViewingComponent } from './model-viewing.component';

describe('ModelViewingComponent', () => {
  let component: ModelViewingComponent;
  let fixture: ComponentFixture<ModelViewingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelViewingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelViewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

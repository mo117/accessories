import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewaComponent } from './newa.component';

describe('NewaComponent', () => {
  let component: NewaComponent;
  let fixture: ComponentFixture<NewaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

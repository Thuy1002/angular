import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHComponent } from './main-h.component';

describe('MainHComponent', () => {
  let component: MainHComponent;
  let fixture: ComponentFixture<MainHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyuiComponent } from './easyui.component';

describe('EasyuiComponent', () => {
  let component: EasyuiComponent;
  let fixture: ComponentFixture<EasyuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

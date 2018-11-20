import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMaincontentComponent } from './app-maincontent.component';

describe('AppMaincontentComponent', () => {
  let component: AppMaincontentComponent;
  let fixture: ComponentFixture<AppMaincontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMaincontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMaincontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

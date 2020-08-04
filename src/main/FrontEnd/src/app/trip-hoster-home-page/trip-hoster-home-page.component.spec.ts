import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripHosterHomePageComponent } from './trip-hoster-home-page.component';

describe('TripHosterHomePageComponent', () => {
  let component: TripHosterHomePageComponent;
  let fixture: ComponentFixture<TripHosterHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripHosterHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripHosterHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

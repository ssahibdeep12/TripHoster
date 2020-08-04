import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripHosterFeedComponent } from './trip-hoster-feed.component';

describe('TripHosterFeedComponent', () => {
  let component: TripHosterFeedComponent;
  let fixture: ComponentFixture<TripHosterFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripHosterFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripHosterFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

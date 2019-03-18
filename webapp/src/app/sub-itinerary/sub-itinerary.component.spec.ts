import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubItineraryComponent } from './sub-itinerary.component';

describe('SubItineraryComponent', () => {
  let component: SubItineraryComponent;
  let fixture: ComponentFixture<SubItineraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubItineraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

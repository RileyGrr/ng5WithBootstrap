import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplendidComponent } from './splendid.component';

describe('SplendidComponent', () => {
  let component: SplendidComponent;
  let fixture: ComponentFixture<SplendidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplendidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplendidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

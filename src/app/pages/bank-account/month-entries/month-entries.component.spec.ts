import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthEntriesComponent } from './month-entries.component';

describe('MonthEntriesComponent', () => {
  let component: MonthEntriesComponent;
  let fixture: ComponentFixture<MonthEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSVdownloadComponent } from './csvdownload.component';

describe('CSVdownloadComponent', () => {
  let component: CSVdownloadComponent;
  let fixture: ComponentFixture<CSVdownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSVdownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSVdownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

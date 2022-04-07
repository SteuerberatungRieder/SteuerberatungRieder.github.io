import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchiebereglersetComponent } from './schiebereglerset.component';

describe('SchiebereglersetComponent', () => {
  let component: SchiebereglersetComponent;
  let fixture: ComponentFixture<SchiebereglersetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchiebereglersetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchiebereglersetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

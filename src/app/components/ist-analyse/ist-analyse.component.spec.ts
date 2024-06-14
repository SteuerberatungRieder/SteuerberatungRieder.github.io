import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IstAnalyseComponent } from './ist-analyse.component';

describe('IstAnalyseComponent', () => {
  let component: IstAnalyseComponent;
  let fixture: ComponentFixture<IstAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IstAnalyseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IstAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

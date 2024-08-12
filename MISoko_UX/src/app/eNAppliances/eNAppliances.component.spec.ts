import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ENAppliancesComponent } from './eNAppliances.component';

describe('ENAppliancesComponent', () => {
  let component: ENAppliancesComponent;
  let fixture: ComponentFixture<ENAppliancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ENAppliancesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ENAppliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

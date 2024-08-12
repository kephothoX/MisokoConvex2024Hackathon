import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateENApplianceComponent } from './updateENAppliance.component';

describe('UpdateENAppliance', () => {
  let component: UpdateENAppliance;
  let fixture: ComponentFixture<UpdateENAppliance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateENAppliance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateENAppliance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

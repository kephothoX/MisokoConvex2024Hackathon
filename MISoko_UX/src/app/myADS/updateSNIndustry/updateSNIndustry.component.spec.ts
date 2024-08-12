import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSNIndustryComponent } from './updateSNIndustry.component';

describe('UpdateSNIndustryComponent', () => {
  let component: UpdateSNIndustryComponent;
  let fixture: ComponentFixture<UpdateSNIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSNIndustryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSNIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SNIndustryComponent } from './sNIndustry.component';

describe('SNIndustryComponent', () => {
  let component: SNIndustryComponent;
  let fixture: ComponentFixture<SNIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SNIndustryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SNIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LNPropertiesComponent } from './lNProperties.component';

describe('LNPropertiesComponent', () => {
  let component: LNPropertiesComponent;
  let fixture: ComponentFixture<LNPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LNPropertiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LNPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

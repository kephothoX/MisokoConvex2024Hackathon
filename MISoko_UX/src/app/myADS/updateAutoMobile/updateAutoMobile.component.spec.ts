import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAutoMobileComponent } from './updateAutoMobile.component';

describe('UpdateAutoMobileComponent', () => {
  let component: UpdateAutoMobileComponent;
  let fixture: ComponentFixture<UpdateAutoMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateAutoMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAutoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

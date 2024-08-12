import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePNAccessoryComponent } from './updatePNAccessory.component';

describe('UpdatePNAccessoryComponent', () => {
  let component: UpdatePNAccessoryComponent;
  let fixture: ComponentFixture<UpdatePNAccessoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePNAccessoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePNAccessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

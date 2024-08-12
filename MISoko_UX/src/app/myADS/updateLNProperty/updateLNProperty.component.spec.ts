import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLNPropertyComponent } from './updateLNProperty.component';

describe('UpdateLNPropertyComponent', () => {
  let component: UpdateLNPropertyComponent;
  let fixture: ComponentFixture<UpdateLNPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLNPropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLNPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

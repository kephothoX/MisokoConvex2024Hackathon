import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PNAccessoriesComponent } from './pNAccessories.component';

describe('PNAccessoriesComponent', () => {
  let component: PNAccessoriesComponent;
  let fixture: ComponentFixture<PNAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PNAccessoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PNAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

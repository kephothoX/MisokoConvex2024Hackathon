import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoMobilesComponent } from './autoMobiles.component';

describe('AutoMobilesComponent', () => {
  let component: AutoMobilesComponent;
  let fixture: ComponentFixture<AutoMobilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoMobilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

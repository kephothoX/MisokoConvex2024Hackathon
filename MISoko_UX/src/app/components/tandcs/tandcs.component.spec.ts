import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TandcsComponent } from './tandcs.component';

describe('TandcsComponent', () => {
  let component: TandcsComponent;
  let fixture: ComponentFixture<TandcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TandcsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TandcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

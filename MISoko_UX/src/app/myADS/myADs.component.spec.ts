import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyADsComponent } from './myADs.component';

describe('MyADsComponent', () => {
  let component: MyADsComponent;
  let fixture: ComponentFixture<MyADsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyADsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyADsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

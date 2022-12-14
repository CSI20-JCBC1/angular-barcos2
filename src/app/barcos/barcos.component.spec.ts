import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuquesComponent } from './barcos.component';

describe('BarcosComponent', () => {
  let component: BuquesComponent;
  let fixture: ComponentFixture<BuquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

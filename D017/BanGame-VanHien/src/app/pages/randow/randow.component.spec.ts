import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandowComponent } from './randow.component';

describe('RandowComponent', () => {
  let component: RandowComponent;
  let fixture: ComponentFixture<RandowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

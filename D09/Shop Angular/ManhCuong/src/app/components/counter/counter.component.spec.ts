import { ComponentFixture, TestBed } from '@angular/core/testing';

import { COUNTERComponent } from './counter.component';

describe('COUNTERComponent', () => {
  let component: COUNTERComponent;
  let fixture: ComponentFixture<COUNTERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ COUNTERComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(COUNTERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCardsComponent } from './shopping-cards.component';

describe('ShoppingCardsComponent', () => {
  let component: ShoppingCardsComponent;
  let fixture: ComponentFixture<ShoppingCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

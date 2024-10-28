import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { Product } from '../../shared/models';
import { cartActions, CartSelector, CartState } from './cart.store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  cart$: Observable<Product[] | null> = this._store.select(CartSelector.PRODUCTS_IN_CART);
  total$: Observable<number | null> = this._store.select(CartSelector.TOTAL);

  constructor(private readonly _store: Store<CartState.Type>){ }

  deleteProduct(id: number): void {
    this._store.dispatch(cartActions.deleteProductCart({id}))
  }
}

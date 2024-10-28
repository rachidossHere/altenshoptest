import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { ShopPageAction, ShopSelector } from './shop.store';
import { Product } from '../../shared/models';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopComponent {
  products$: Observable<Product[]> = this._store.select(ShopSelector.PAGINATION);
  currentPage$: Observable<number> = this._store.select(ShopSelector.CURRENT_PAGE);

  totalPages$: Observable<number> = this._store.select(ShopSelector.TOTAL_PAGE);

  totalItems: number = 0;
  itemsPerPage: number = 10;
  currentPage: number = 1;

  constructor(private readonly _store: Store) { }

  onAddProductEventHandler(product: Product): void {
    this._store.dispatch(ShopPageAction.addProduct({ product }));
  }

  onSearch(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this._store.dispatch(ShopPageAction.setSearchTerm({ searchTerm }));
  }

  onPageChange(page: number) {
    this._store.dispatch(ShopPageAction.setCurrentPage({ currentPage: page }));
  }

  onUpdateQuantity(product: Product) {
    this._store.dispatch(ShopPageAction.updateProductQuantity({ product }));
}

}

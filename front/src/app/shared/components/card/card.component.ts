import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
    @Input() product!: Product;

    @Output() addProduct:       EventEmitter<Product> = new EventEmitter<Product>();
    @Output() updateQuantity:   EventEmitter<Product>  = new EventEmitter<Product>();

    getInventoryStatusText(status: string): string {
        switch (status) {
            case 'OUTOFSTOCK':
                return 'Out of Stock';
            case 'LOWSTOCK':
                return 'Low Stock';
            case 'INSTOCK':
                return 'In Stock';
            default:
                return '';
        }
    }

    onAddProduct() {
        if (this.product.quantity > 0) {
            this.addProduct.emit(this.product);
            const updatedProduct = { ...this.product, quantity: this.product.quantity - 1 };
            this.updateQuantity.emit(updatedProduct); 
        }
    }
}

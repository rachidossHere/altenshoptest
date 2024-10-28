import { createActionGroup, createFeatureSelector, createReducer, createSelector, emptyProps, on, props } from "@ngrx/store";
import { Product } from "../../shared/models"
import { sumProducts } from "../../shared/utils/sum-products";

export namespace CartSelector  {
    const SLICE_NAME: string = 'cart'
    export const CART_SELECTOR = createFeatureSelector<CartState.Type>(SLICE_NAME);
    export const PRODUCTS_IN_CART = createSelector(CART_SELECTOR, ({ cartProducts }: CartState.Type) => cartProducts);
    export const MESSAGE = createSelector(CART_SELECTOR, ({ errorMessage }: CartState.Type) => errorMessage);
    export const TOTAL = createSelector(CART_SELECTOR, ({ cartProducts }: CartState.Type) => sumProducts(cartProducts));
}

export namespace CartState {
    export type Type = {
        cartProducts: Product[],
        errorMessage: string;
    }

    export const INITIAL: Type = {
        cartProducts: [],
        errorMessage: ''
    }
}

export const cartActions = createActionGroup({
    source: "Cart Page",
    events: ({
        "Add To Cart": props<{ product: Product }>(),
        "Delete Product Cart": props<{ id: number }>()
    })
});

export const cartReducer = createReducer(
    CartState.INITIAL,
    on(cartActions.addToCart, (state, { product }: Record<'product', Product>) => {
        const existingProductIndex = state.cartProducts.findIndex(p => p.id === product.id);
        let updatedCartProducts;
    
        if (existingProductIndex !== -1) {
            updatedCartProducts = state.cartProducts.map((p, index) =>
                index === existingProductIndex ? { ...p, quantity: (p.quantity || 1) + 1 } : p
            );
        } else {
            updatedCartProducts = [...state.cartProducts, { ...product, quantity: 1 }];
        }
    
        return {
            ...state,
            cartProducts: updatedCartProducts,
            errorMessage: ''
        };
    }),
    
    on(cartActions.deleteProductCart, (state, { id }: Record<'id', number>) => ({
        ...state,
        cartProducts: state.cartProducts.filter((product: Product) => product.id !== id),
        errorMessage: ''
    })),
)
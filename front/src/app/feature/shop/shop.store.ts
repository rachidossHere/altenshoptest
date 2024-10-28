import { createActionGroup, createFeatureSelector, createReducer, createSelector, emptyProps, on, props } from "@ngrx/store";
import { getRouterSelectors } from "@ngrx/router-store";
import { Product } from "../../shared/models";

export namespace ShopSelector {
    const SLICE_NAME: string = 'shop'
    export const SHOP_SELECTOR = createFeatureSelector<ShopState.Type>(SLICE_NAME);

    export const PRODUCTS = createSelector(SHOP_SELECTOR, ({ products }: ShopState.Type) => products);
    export const SELECT_SEARCH_TERM = createSelector(SHOP_SELECTOR, ({ searchTerm }: ShopState.Type) => searchTerm);
    export const CURRENT_PAGE = createSelector(SHOP_SELECTOR, (state: ShopState.Type) => state.currentPage);
    export const ITEMS_PER_PAGE = createSelector(SHOP_SELECTOR, (state: ShopState.Type) => state.itemsPerPage);



    export const FILTER = createSelector(
        PRODUCTS,
        SELECT_SEARCH_TERM,
        (products, searchTerm) => {
            if (!searchTerm) {
                return products;
            }
            return products.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
    );

    export const PAGINATION = createSelector(
        FILTER,
        CURRENT_PAGE,
        ITEMS_PER_PAGE,
        (products, currentPage, itemsPerPage) => {
            const start = (currentPage - 1) * itemsPerPage;
            return products.slice(start, start + itemsPerPage);
        }
    );

    // Nombre total de pages après filtrage
    export const TOTAL_PAGE = createSelector(
        FILTER,
        ITEMS_PER_PAGE,
        (filteredProducts, itemsPerPage) => Math.ceil(filteredProducts.length / itemsPerPage)
    );

}

export namespace ShopState {
    export type Type = {
        products: Product[],
        searchTerm: string;
        currentPage: number;
        itemsPerPage: number;
    }

    export const INITIAL: ShopState.Type = {
        products: [],
        searchTerm: '',
        currentPage: 1,
        itemsPerPage: 10
    }
}


export const ShopPageAction = createActionGroup({
    source: "Shop Page",
    events: ({
        "Load Products Page": emptyProps(),
        "Add Product": props<{ product: Product }>(),
        "Set Search Term": props<{ searchTerm: string }>(),
        "Set Current Page": props<{ currentPage: number }>(),
        "Update Product Quantity": props<{ product: Product }>(),
    })
});

export const ShopAPIActions = createActionGroup({
    source: "Shop API",
    events: ({
        "Shop Loaded Success": props<{ products: Product[] }>(),
        "Shop Loaded Failed": props<{ message: string }>(),
        "Shop Added Event Effect": props<{ product: Product }>(),
        "Shop Added Success": emptyProps(),
        "Shop Added Failed": props<{ message: string }>(),
        "Shop Deleted Event Effect": props<{ id: number }>(),
        "Shop Deleted Success": props<{ id: number }>(),
        "Shop Deleted Failed": props<{ message: string }>(),
    })
})

export const shopReducer = createReducer(
    ShopState.INITIAL,
    on(ShopPageAction.loadProductsPage, (state) => ({
        ...state,
        loading: true
    })),
    on(ShopAPIActions.shopLoadedSuccess, (state, { products }: Record<'products', Product[]>) => ({
        ...state,
        products,
        errorMessage: '',
        loading: false
    })),
    on(ShopPageAction.addProduct, (state: ShopState.Type) => ({
        ...state,
        loading: true
    })),

    on(ShopAPIActions.shopAddedEventEffect, (state, { product }: Record<'product', Product>) => ({
        ...state,
        products: [...state.products, product],
        loading: false,
        errorMessage: ''
    })),

    on(ShopAPIActions.shopDeletedEventEffect, (state, { id }) => ({
        ...state,
        loading: false,
        products: state.products.filter((product: Product) => product.id !== id)
    })),

    on(ShopPageAction.setSearchTerm, (state, { searchTerm }) => ({
        ...state,
        searchTerm,
        currentPage: 1
    })),

    on(ShopPageAction.setCurrentPage, (state, { currentPage }) => ({
        ...state,
        currentPage
    })),

    on(ShopPageAction.updateProductQuantity, (state, { product }) => {
        return {
            ...state,
            products: state.products.map(existingProduct => 
                existingProduct.id === product.id ? { ...existingProduct, quantity: product.quantity } : existingProduct
            )
        };
    }),
    
)
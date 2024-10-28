import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, mergeMap, Observable, of, switchMap, tap } from "rxjs";
import { ToastrService } from "ngx-toastr";
import { ProductsService } from "../../shared/services";
import { Product } from "../../shared/models";
import { cartActions } from "../cart/cart.store";
import { ShopAPIActions, ShopPageAction } from "./shop.store";

@Injectable()
export class ShopEffects {
    ngrxOnInitEffects() {
        return ShopPageAction.loadProductsPage();
    }
    constructor(
        private readonly actions$: Actions,
        private readonly productsService: ProductsService,
        private readonly toastr: ToastrService
    ) { }

    loadProducts$ = createEffect(() => this.actions$.pipe(
        ofType(ShopPageAction.loadProductsPage),
        concatMap(() => this.productsService.getProducts().pipe(
            map((products) => ShopAPIActions.shopLoadedSuccess({ products })),
            catchError((error) => of(ShopAPIActions.shopLoadedFailed({ message: error })))
        ))
    ))

    addProduct$ = createEffect(() => this.actions$.pipe(
        ofType(ShopPageAction.addProduct),
        mergeMap(({ product }: Record<'product', Product>) => [
            cartActions.addToCart({ product }),
            ShopAPIActions.shopAddedSuccess()
        ]),
        catchError((error: string) => of(ShopAPIActions.shopAddedFailed({ message: error })))
    ));

    addProductSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(ShopAPIActions.shopAddedSuccess),
        tap(() => {
            this.toastr.success('Produit ajouter avec succés')
        })
    ), { dispatch: false });

    deletePRoduct$ = createEffect(() => this.actions$.pipe(
        ofType(ShopAPIActions.shopDeletedEventEffect),
        mergeMap(({id}) => this.productsService.deleteProduct(id).pipe(
            map(() => ShopAPIActions.shopDeletedSuccess({id})),
            catchError((error) => of(ShopAPIActions.shopDeletedFailed({message: error})))
        ))
    ))

  
}
// import { Injectable } from "@angular/core";
// import { Actions, createEffect, ofType } from "@ngrx/effects";
// import { catchError, concatMap, map, mergeMap, Observable, of, switchMap, tap } from "rxjs";
// import { Router } from "@angular/router";
// import { ToastrService } from "ngx-toastr";
// import { ProductsService } from "../../shared/services";
// import { Product } from "../../shared/models";
// import { CartPageAction } from "./cart.store";

// @Injectable()
// export class CartEffects {
//     ngrxOnInitEffects() {
//         // return productsPageAction.loadProductsPage();
//     }
//     constructor(
//         private readonly actions$: Actions,
//         private readonly productsService: ProductsService,
//         private readonly router: Router,
//         private readonly toastr: ToastrService
//     ) { }

//     // loadProducts$ = createEffect(() => this.actions$.pipe(
//     //     ofType(CartPageAction.loadProductsPage),
//     //     concatMap(() => this.productsService.getProducts().pipe(
//     //         map((products) => productsAPIActions.productsLoadedSuccess({ products })),
//     //         catchError((error) => of(productsAPIActions.productsLoadedFailed({ message: error })))
//     //     ))
//     // ))

//     // checkBeforeAddingProduct$ = createEffect(() => this.actions$.pipe(
//     //     ofType(CartPageAction.addProduct),
//     //     switchMap(({ product }: { product: Product }) => this._checkProductConstraints(product).pipe(
//     //         switchMap((isValid) => {
//     //             if (isValid) {
//     //                 return of(CartPageAction.productAddedEventEffect({ product }));
//     //             } else {
//     //                 return of(productsAPIActions.productAddedFailed({ message: 'Constraints not satisfied' }));
//     //             }
//     //         }),
//     //         catchError((error) => of(productsAPIActions.productAddedFailed({ message: error })))
//     //     ))
//     // ));

//     addProduct$ = createEffect(() => this.actions$.pipe(
//         ofType(productsAPIActions.productAddedEventEffect),
//         mergeMap(({ product }: Record<'product', Product>) => this.productsService.addProduct(product).pipe(
//             map(() => productsAPIActions.productAddedSuccess()),
//             catchError((error: string) => of(productsAPIActions.productAddedFailed({ message: error })))
//         ))
//     ));

//     addProductSuccess$ = createEffect(() => this.actions$.pipe(
//         ofType(productsAPIActions.productAddedSuccess),
//         tap(() => {
//             this.toastr.success('Produit ajouter avec succés')
//             this.router.navigate(['/products']);
//         })
//     ), { dispatch: false });

//     private _checkProductConstraints(product: Product): Observable<boolean> {
//         const isValid = product.price > 0 && !!product.name;
//         return of(isValid);
//     }

//     deletePRoduct$ = createEffect(() => this.actions$.pipe(
//         ofType(productsAPIActions.productDeletedEventEffect),
//         mergeMap(({id}) => this.productsService.deleteProduct(id).pipe(
//             map(() => productsAPIActions.productDeletedSuccess({id})),
//             catchError((error) => of(productsAPIActions.productDeletedFailed({message: error})))
//         ))
//     ))

  
// }
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private readonly _http: HttpClient) { }

  private readonly productsAPIurl: string = 'api/products';

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this.productsAPIurl).pipe(catchError(this.handleError));
  }

  getProductById(id: number): Observable<Product> {
    return this._http.get<Product>(`${this.productsAPIurl}/${id}`).pipe(catchError(this.handleError));
  }

  addProduct({ name, price }: Product): Observable<Product> {
    return this._http.post<Product>(this.productsAPIurl, { name, price })
              .pipe(catchError(this.handleError));
  }

  updateProduct(product: Product): Observable<Product> {
    return this._http.put<Product>(this.productsAPIurl, product).pipe(catchError(this.handleError));
  }

  deleteProduct(id: number): Observable<unknown> {
    return this._http.delete(`${this.productsAPIurl}/${id}`).pipe(catchError(this.handleError));
  }

  private handleError({ status }: HttpErrorResponse) {
    return throwError(
      () => `${status}: Something bad happened.`
    );
  }
}

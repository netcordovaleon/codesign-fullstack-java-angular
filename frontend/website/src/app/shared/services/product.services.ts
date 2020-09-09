import { Injectable } from '@angular/core';
import { HttpService } from '../../core/http/http.service';
import { ProductModel, IProductModel } from '../models/product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductEndpoint } from '../endpoints/product.endpoint';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private readonly http: HttpService) { }

  getAllProducts(): Observable<IProductModel[]> {
    return this.http
      .get<any>(ProductEndpoint.productList)
      .pipe(map((res: any) => res.map((item) => new ProductModel(item))));
  }

  getProductById(id: number): Observable<IProductModel> {
    return this.http
      .get<IProductModel>(ProductEndpoint.productGetById)
      .pipe(map((item: IProductModel) => new ProductModel(item)));
  }

}

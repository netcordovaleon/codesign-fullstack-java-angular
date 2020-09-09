import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../shared/services/product.services';
import { IProductModel } from 'src/app/shared/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  data: IProductModel[];


  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {

    this.getAllProducts();
  }

  private getAllProducts(): void {
    this.productsService.getAllProducts().subscribe((resp: IProductModel[]) => {
      this.data = resp;
    });
  }

  agregarNuevoProducto(): void {
    this.router.navigate(['/new-product']);
  }

}

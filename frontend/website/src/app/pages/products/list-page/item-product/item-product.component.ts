import { Component, OnInit, Input } from '@angular/core';
import { IProductModel } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css']
})
export class ItemProductComponent implements OnInit {

  @Input() data: IProductModel;


  constructor() { }

  ngOnInit(): void {
  }

}

export interface IProductModel {
  code: number;
  name: string;
  description: string;
  unitOfMeasure: string;
  stock: number;
  unitPrice: number;
  registerDate: Date;
  status: string;
}


export class ProductModel {
  code: number;
  name: string;
  description: string;
  unitOfMeasure: string;
  stock: number;
  unitPrice: number;
  registerDate: Date;
  status: string;
  constructor(product: IProductModel) {
    this.code = product.code || null;
    this.name = product.name || '';
    this.description = product.description || '';
    this.unitOfMeasure = product.unitOfMeasure || '';
    this.stock = product.stock || null;
    this.unitPrice = product.unitPrice || null;
    this.registerDate = product.registerDate || null;
    this.status = product.status || '';
  }
}

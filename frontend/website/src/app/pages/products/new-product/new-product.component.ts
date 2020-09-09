import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  newProductForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    unitOfMeasure: new FormControl('', [Validators.required]),
    stock: new FormControl('', [Validators.required]),
    unitPrice: new FormControl('', [Validators.required])
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {}

  goToList(): void {
    this.router.navigate(['/products']);
  }

}

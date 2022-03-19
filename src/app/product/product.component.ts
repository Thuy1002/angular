import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listProduct = new Array();
  newProduct = {
    id: 0,
    name: '',
    price: 0,
    desc: ''
  };
  Product_update = {
    id: 0,
    name: '',
    price: 0,
    desc: ''
  };
  onEdit(p: any) {
    this.Product_update = p;
    console.log(p)
  }
  onSubmit(product: any) {
    if (this.Product_update.id) {
      for (let i = 0; i < this.listProduct.length; i++) {
        if (this.listProduct[i].id === this.Product_update.id) {
          if (!product.name) {
            product.name = this.Product_update.name
          }
          if (!product.price) {
            product.price = this.Product_update.price
          }
          if (!product.desc) {
            product.desc = this.Product_update.desc
          }
          this.listProduct[i] = {
            ...product, id: this.Product_update.id
          };
          this.Product_update = {
            id: 0,
            name: '',
            price: 0,
            desc: ''
          }
        }
      }

    }
    else {
      const _id = Math.floor(Math.random() * 101 + 1);
      this.listProduct.push({ ...product, id: _id, price: +product.price });
      console.log(this.listProduct)
      this.newProduct = {
        id: 0,
        name: '',
        price: 0,
        desc: ''
      }
    }

  }
}
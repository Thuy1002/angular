import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
products:any;

  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    this.onGetList();
  }
  onGetList() {
    this.ps.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
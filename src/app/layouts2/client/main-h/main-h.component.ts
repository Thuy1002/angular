import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-main-h',
  templateUrl: './main-h.component.html',
  styleUrls: ['./main-h.component.css']
})
export class MainHComponent implements OnInit {
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

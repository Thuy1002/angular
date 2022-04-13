import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-ctsp',
  templateUrl: './ctsp.component.html',
  styleUrls: ['./ctsp.component.css']
})
export class CtspComponent implements OnInit {
productDetail: any;
products: any;
id: any;

  constructor(
    private ps:ProductService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.ps.getProduct(this.id).subscribe(data => {
      this.productDetail  = data;
    })
    this.onGetList();
  }
  onGetList() {
    this.ps.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}

// import { newArray } from '@angular/compiler/src/util';
// import { Component, OnInit } from '@angular/core';

// import { ProductService } from '../services/product.service';


// type PRODUCT_TYPE = {
//   id: number,
//   name: string,
//   desc: string,
//   price: number
// };
// @Component({
//   selector: 'app-product',
//   templateUrl: './product.component.html',
//   styleUrls: ['./product.component.css']
// })
// export class ProductComponent implements OnInit {
//   products: any;
//   constructor(private ps: ProductService) { }

//   ngOnInit(): void {
//     this.onGetlist();
//   }
//   onGetlist(){
//     this.ps.getProducts().subscribe(data => {
//       this.products = data;
//     })
//   }
//   newProduct = {
//     id: 0,
//     name: '',
//     price: 0,
//     desc: ''
//   };


//   onDelete(id: string|number){
//     if(id){
//       this.ps.deleteProduct(id).subscribe(data => {
//         this.onGetlist();
//       });
//     }
//   }

//   /*  */
//   listProduct = new Array();
//   /*  */



//   /*  */
//   Product_update = {
//     id: 0,
//     name: '',
//     price: 0,
//     desc: ''
//   };
//   onEdit(p: any) {
//     this.Product_update = p;
//     console.log(p)
//   }

//   /*  */
//   onSubmit(product: any) {
//     if (this.Product_update.id) {
//       for (let i = 0; i < this.listProduct.length; i++) {
//         if (this.listProduct[i].id === this.Product_update.id) {
//           if (!product.name) {
//             product.name = this.Product_update.name
//           }
//           if (!product.price) {
//             product.price = this.Product_update.price
//           }
//           if (!product.desc) {
//             product.desc = this.Product_update.desc
//           }
//           this.listProduct[i] = {
//             ...product, id: this.Product_update.id
//           };
//           this.Product_update = {
//             id: 0,
//             name: '',
//             price: 0,
//             desc: ''
//           }
//         }
//       }

//     }
//     else {
//       const _id = Math.floor(Math.random() * 101 + 1);
//       this.listProduct.push({ ...product, id: _id, price: +product.price });
//       console.log(this.listProduct)
//       this.newProduct = {
//         id: 0,
//         name: '',
//         price: 0,
//         desc: ''
//       }
//     }
//     /*  */
//     console.log(product);
//   }
//   parentChangeStutus(newStatus:any,productId:number){
//     console.log(newStatus,productId);
//     const currentPrdct  = this.product.find(product:any)=> p.id ===productId;
   
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

type PRODUCT_TYPE = {
  id: number,
  name: string,
  desc: string,
  price: number
};

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:any;
  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.onGetList();
  }

  newProduct = {
    name: '',
    price: 0,
    desc: ''
  };

  onSubmit(product :any) {
    console.log(product);
  }

  onGetList() {
    this.ps.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  onDelete(id: number|string) {
    if (id) {
      this.ps.deleteProduct(id).subscribe(data => {
        this.onGetList();
      });
    }
  }

  parentChangeStatus(newStatus:number, productId:number) {
    const currentProduct = this.products.find((product:any) =>
      product.id === productId
    );

    if (currentProduct) {
      this.ps.updateProduct(
        productId,
        {
          ...currentProduct,
          status: newStatus
        }
      ).subscribe((data) => {
        this.onGetList();
      });
    }


  }
}
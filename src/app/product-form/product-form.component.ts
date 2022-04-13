import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
//   productDetail:any;
//   id:any;
//   constructor(
//     private activRoute: ActivatedRoute, // su dung de lay id tren url
//     private router: Router, // su dung de dieu huong
//     private ps: ProductService
//   ) { }

//   ngOnInit(): void {
//     this.id = this.activRoute.snapshot.params['id'];
//     // console.log(this.id);
//     // Neu co id ~ dang chinh sua thi moi call API lay chi tiet
//     // Khong thi thoi
//     if (this.id !== undefined) {
//       this.ps.getProduct(this.id).subscribe(data => {
//         this.productDetail = data;
//       })
//     } else {
//       this.productDetail = {
//         name: '',
//         desc: '',
//         price: 0
//       };
//     }
//   }

//   onUpdate (obj :any) {
//     // Nhan du lieu tu form, tien hanh call API
//     if (obj.id !== undefined) {
//       this.ps.updateProduct(this.id, obj).subscribe(data => this.router.navigate(['admin/phones']));
//     } else {
//       this.ps.createProduct(obj).subscribe (data => this.router.navigate(['admin/phones']));
//     }
//     // Tien hanh dieu huong ve trang danh sach
//     // this.router.navigate(['admin/phones']);
//   }
  
// }
imageBase64: any;
  registerForm: FormGroup;
  constructor() {
    this.registerForm = new FormGroup({
      // tên_trường: giá trị là thể hiện của FormControl(gt_mặc_định)
      name: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          // this.checkUsername
      ]),
      price: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
    });
  }

  ngOnInit(): void {
  // this.id = this.activRoute.snapshot.params['id'];
  //     // console.log(this.id);
  //     // Neu co id ~ dang chinh sua thi moi call API lay chi tiet
  //     // Khong thi thoi
  //     if (this.id !== undefined) {
  //       this.ps.getProduct(this.id).subscribe(data => {
  //         this.productDetail = data;
  //       })
  //     } else {
  //       this.productDetail = {
  //         name: '',
  //         desc: '',
  //         price: 0
  //       };
  //     }
    }

  checkUsername (control: AbstractControl) :ValidationErrors|null {
    const username = control.value;
    if (!username.includes('iphone')) {
      return {hasName: true}; // obj này sẽ được trả về trong errors
    }
    return null;
  }

  onSubmit () {
    console.log(this.imageBase64);
  }

  changeFile (event: any) {
    if(event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {

        this.imageBase64 = e.target?.result;
        console.log(e.target?.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
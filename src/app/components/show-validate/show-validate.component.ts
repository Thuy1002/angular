import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-show-validate',
  templateUrl: './show-validate.component.html',
  styleUrls: ['./show-validate.component.css']
})
export class ShowValidateComponent implements OnInit {
  //nếu không chuyền vào input thì biến sẽ là tên biến bên trang chuyền
  //nếu có thì chuyền vào bên kia chuyền đặt vào biens mới
  @Input('form') formData: any;
  @Input() key: string;
  constructor() {
    this.key = '';
  }

  ngOnInit(): void {
  }

}

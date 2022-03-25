import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//formsmudule được cung cấp được tương tác trong angular
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductService } from './services/product.service';
import  {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AsideComponent } from './layout/aside/aside.component';
import { LayoutComponent } from './layouts/layout/layout.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    StudentComponent,
    ProductDetailComponent,
    ProductFormComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    LayoutComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, //import cho các component con sử dụng được
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

import { FooterComponent } from './layouts2/admin/footer/footer.component';
import { AsideComponent } from './layouts2/admin/aside/aside.component';
import { LayoutComponent } from './layouts/layout/layout.component';



import { ReactiveFormsModule } from '@angular/forms';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import { HeaderComponent } from './layouts2/admin/header/header.component';
import { ProductNameComponent } from './components/product-name/product-name.component';
import { StatusComponent } from './components/status/status.component';
import { HeaderHComponent } from './layouts2/client/header-h/header-h.component';
import { MainHComponent } from './layouts2/client/main-h/main-h.component';

import { FooterHComponent } from './layouts2/client/footer-h/footer-h.component';
import { AdminComponent } from './layouts2/admin/admin.component';
import { ClientComponent } from './layouts2/client/client.component';
import { CtspComponent } from './layouts2/client/ctsp/ctsp.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    StudentComponent,
    ProductDetailComponent,
    ProductFormComponent,
    FooterComponent,
    AsideComponent,
    LayoutComponent,
    ShowValidateComponent,
    HeaderComponent,
    ProductNameComponent,
    StatusComponent,
    HeaderHComponent,
    MainHComponent,
   
    FooterHComponent,
    AdminComponent,
    ClientComponent,
    CtspComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, //import cho các component con sử dụng được
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

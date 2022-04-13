import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './layouts2/admin/admin.component';
import { HomeAdminComponent } from './layouts2/admin/home-admin/home-admin.component';
import { ClientComponent } from './layouts2/client/client.component';
import { CtspComponent } from './layouts2/client/ctsp/ctsp.component';
import { MainHComponent } from './layouts2/client/main-h/main-h.component';
import { ShopComponent } from './layouts2/client/shop/shop.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { identifierName } from '@angular/compiler';

const routes: Routes = [
  // {
  //   path: '',
  //   component: ProductComponent
  // },
  // {
  //   path: 'product',
  //   component: ProductComponent
  // },
  // {
  //   path: 'product/create',
  //   component: ProductFormComponent
  // },
  // {
  //   path: 'product/:id',
  //   component: ProductDetailComponent
  // },
  // {
  //   path: 'product/:id/edit',
  //   component: ProductFormComponent
  // },
  // {
  //   path: 'student',
  //   component: StudentComponent
  // },
  // {
  //   path: 'app',
  //   component: AppComponent
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent
  // },

  // route và layouter
  {
    path: '',
    component: ClientComponent,
    children: [//component trong children sẽ được render vào 
      //phần đặt router out-let trong componnet Clientcomponent
      // {
      //   path:'login',
      //   component:LoginComponent
      // },
      {
        path: '',
        component: MainHComponent
      },
      {
        path: 'phones/:id',
        component: CtspComponent
      },
      {
        path: 'ctsp',
        component: CtspComponent
      },
      {
        path: 'shop',
        component: ShopComponent
      },

    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: HomeAdminComponent,
        pathMatch: 'full',
      },
      {
        path: 'phones',
        redirectTo: 'phones',
        pathMatch: 'full',
      },
      {
        path: 'student',
        component: StudentComponent,
        pathMatch: 'full',
      },
      {
        path: 'phones',
        component: ProductComponent,
      },
      {
        path: '',
        component: ProductComponent,
      },
      {
        path: 'phones/create',
        component: ProductFormComponent,
      },
      {
        path: 'phones/:id',
        component: ProductDetailComponent
      },
      {
        path: 'phones/:id/edit',
        component: ProductFormComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './layouts2/admin/admin.component';
import { ClientComponent } from './layouts2/client/client.component';
import { CtspComponent } from './layouts2/client/ctsp/ctsp.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { StudentComponent } from './student/student.component';

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
      {
        path: '',
        component: ProductComponent
      },
      {
        path: 'ctsp',
        component: CtspComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'product',
        pathMatch: 'full',
      },
      {
        path: 'student',
        component: StudentComponent,
         pathMatch: 'full',
      },
      {
        path: 'product',
        component: ProductComponent,
        children: [
          {
            path: '',
            component: ProductComponent,
          },
          {
              path: 'create',
              component: ProductFormComponent,
            },
          // {
          //   path: 'form',
          //   component: ProductFormComponent,
          // },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

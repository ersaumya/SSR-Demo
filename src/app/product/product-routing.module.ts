import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: ':id', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

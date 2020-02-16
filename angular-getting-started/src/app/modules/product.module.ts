import { ConvertToSpacePipe } from './../shared/convert-to-spaces.pipe';
import { NgModule } from '@angular/core';
import { ProductListComponent } from '../products-table/product-list.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SharedModule } from './shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacePipe
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }

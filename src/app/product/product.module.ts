import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './component/product.component';
import { ProductRoutingModule } from './product-routing.module';
import { AmountPipe } from '../pipes/amount.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [ProductComponent, AmountPipe],
})
export class ProductModule {}

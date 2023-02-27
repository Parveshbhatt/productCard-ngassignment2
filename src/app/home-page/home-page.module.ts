import { NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from '../components/product-card/product-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeContainerComponent } from './home-container/home-container.component';


@NgModule({
  declarations: [
    ProductCardComponent,
    HomeContainerComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [HomeContainerComponent]
})
export class HomePageModule { }

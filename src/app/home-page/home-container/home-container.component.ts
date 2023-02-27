import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from '../../Service/products.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent {

  
  constructor(private productService: ProductsService){

  }

  products = [];

  ngOnInit(): void {
      this.fetchProducts();
  }

  private fetchProducts(){
    // const products = [];
    this.productService.fetchProducts().subscribe((res) => {
      for(const key in res){
        if(res.hasOwnProperty(key)){
          this.products.push({...res[key]});
        }
      }
      console.log(this.products);
      
    })

    // return products;
  }

}

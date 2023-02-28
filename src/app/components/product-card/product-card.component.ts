import { Component, Input} from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  
  @Input() title:string = "";
  @Input() description:string = "";
  @Input() price:number = 0;
  @Input() source:string = "";
  @Input() ratingRate:number = 0;
  @Input() ratingCount:number = 0;

  faStar = faStar;
  faHeartCirclePlus = faHeartCirclePlus;
}

import { Component, OnInit, Input } from '@angular/core';
import { Shoppingcartitem } from 'src/app/classes/shoppingcartitem';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {
  
  @Input() itemCart: Shoppingcartitem;

  constructor() { }

  ngOnInit(): void {
  }

}

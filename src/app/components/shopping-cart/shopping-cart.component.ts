import { Component, OnInit } from '@angular/core';
import { Shoppingcartitem } from 'src/app/classes/shoppingcartitem';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  itemsCart: Shoppingcartitem[] = [
    {
      id: '1',
      itemsInCart: "1",
      price: "5",
      product: "Yogurt lala fresa 1",
      urlImage: "/assets/images/products/product5.png"
    },
    {
      id: '1',
      itemsInCart: "1",
      price: "15",
      product: "Lego superman",
      urlImage: "/assets/images/products/product6.png"
    }
  ]

}

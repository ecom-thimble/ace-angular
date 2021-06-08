import { Component,OnInit } from '@angular/core';

import { CartService } from '../cart.service';
declare function paymentForm(): any;

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {




  constructor(private cartService: CartService) {
  }
  public ngOnInit(): void {
    paymentForm();

}
}

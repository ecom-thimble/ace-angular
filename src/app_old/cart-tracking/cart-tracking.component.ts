import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-tracking',
  templateUrl: './cart-tracking.component.html',
  styleUrls: ['./cart-tracking.component.css']
})
export class CartTrackingComponent {
  name = 'Progress Bar';

  //Demo purpose only, Data might come from Api calls/service
  public counts = ["Recieved","In Progress",
  "Billed","Order Closed"];
  public orderStatus = "In Progress"
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartTrackingComponent } from './cart-tracking/cart-tracking.component';
import { ShippingComponent } from './shipping/shipping.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CartInfoComponent } from './cart-info/cart-info.component';
import { CartAddressComponent } from './cart-address/cart-address.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { WizardComponent } from './wizard/wizard.component';
import { StepFormSelectorComponent } from './wizard/step-form-selector/step-form-selector.component';
import { FormStepDirective } from './directives/form-step.directive';
import { MutiStepFormComponent } from './wizard/multi-step-form/multi-step-form.component';
import { LoginComponent } from './login/login.component';

import { LoginModalComponent } from './login-modal/login-modal.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: "/home", pathMatch: 'full'
      },
      { path: 'home', component: HomeComponent },
      { path: 'products-detail', component: ProductDetailsComponent },
      { path: 'products-list', component: ProductListComponent },
      { path: 'cart', component: CartComponent },
      { path: 'cart1', component: CartInfoComponent },
      { path: 'cart2', component: CartAddressComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'cart3', component: CartTrackingComponent },
      { path: 'cart4', component: ProductAlertsComponent },
      { path: 'loginModal', component: LoginModalComponent },

    ])
  ],
  declarations: [
    MutiStepFormComponent, FormStepDirective, StepFormSelectorComponent,
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    CartTrackingComponent,
    ShippingComponent,
    FooterComponent,
    HomeComponent,
    CartInfoComponent,
    CartAddressComponent,
    WizardComponent,
    LoginComponent,
    LoginModalComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  // providers:[{provide: MatStepperIntl, useClass: MyIntl}],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

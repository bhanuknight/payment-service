import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './components';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from './services/commmon.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    PaymentComponent
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

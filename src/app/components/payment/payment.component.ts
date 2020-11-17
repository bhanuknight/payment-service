import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../../services/commmon.service';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  month: number;
  year: number;

  dto = new FormGroup({
    creditCardNumber: new FormControl('', [Validators.required]),
    cardholder: new FormControl('', [Validators.required]),
    expirationDate: new FormGroup({
      month: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      year: new FormControl('', [Validators.required, Validators.maxLength(4)]),
    }),
    securityCode: new FormControl('', [Validators.maxLength(3)]),
    amount: new FormControl('', [Validators.required])
  });

  constructor(private service: CommonService) {

  }
  ngOnInit() {
    this.month = new Date().getMonth() + 1;
    this.year = new Date().getFullYear();
    this.dto.patchValue({
      expirationDate: {
        month: this.month,
        year: this.year
      }
    })
  }

  sendData() {
    let payload = this.dto.value;

    if(payload['expirationDate']['month'] < this.month || payload['expirationDate']['year'] < this.year) {
      alert("Card is expired!");
      return;
    } else {
      payload['expirationDate'] = payload['expirationDate']['month'] + '/' + payload['expirationDate']['year'];
    }

    console.log(payload);
    
  }
}

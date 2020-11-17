import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'payment-service';
  showButton: boolean;
  constructor(private router: Router) {
    router.events.subscribe(() => {
      if(router.url == '/payment') {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    });
  }

  ngOnInit() {
    
  }

  navigateToPayment() {
    this.router.navigate(['/payment']);
  }
}
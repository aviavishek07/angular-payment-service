import { Component } from '@angular/core';

interface AdvancePayment {
  amount: number;
  description: string;
  paymentDate: Date;
}

@Component({
  selector: 'app-advance-payment',
  templateUrl: './advance-payment.component.html',
  styleUrls: ['./advance-payment.component.css']
})
export class AdvancePaymentComponent {
  advancePayment: AdvancePayment = {
    amount: 0,
    description: '',
    paymentDate: new Date()
  };

  submitForm() {
    // Here, you can implement the logic to handle the form submission
    // For example, you can send the data to a backend API or perform any other necessary actions.
    console.log('Form submitted:', this.advancePayment);
  }
}

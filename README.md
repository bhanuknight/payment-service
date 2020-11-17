# PaymentService

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Test project for Filed

Project Requirements:

Write an angular application with the following requirements
1. Create DTO like this which will be used to make requests
    - creditCardNumber (mandatory, string)
    - cardholder (mandatory, string)
    - expirationDate (mandatory, Date, cannot be in the past)
    - securityCode (optional, string, 3 digits)
    - amount (mandatory, number, must be greater than 0)
2. Write a Payment service with a function that creates a POST request.
3. Create a new page and a new component (to be used in this page) with inputs for the DTO
   created at point 1, and add validations on these inputs based on the mandatory or optional
   parameters described. Create a button with a click event and call the payment service
   method.
4. In the app.component.html, create a button (name it anyway you like) or an <a> and use
   the angular router to navigate to the new page created at the previous point.



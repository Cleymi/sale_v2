import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styles: [
  ]
})
export class CustomersComponent implements OnInit {

  customers: any = [
    {
      id: 1,
      service: "Netflix",
      name: "Clever rojas",
      account: "netflix1@gmail.com",
      username: "clever@gmail.com",
      password: "clever123",
      cellphone: "123123123",
      windows: "4",
      pin: "1234",
      ammount: "45",
      days: "1",
      country: "Perú",
      state: "Activo",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  hola() {
    alert("Estimado usuario su cuenta esta próximo a vencer")
  }

}

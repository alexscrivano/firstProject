import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request-sender',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './request-sender.component.html',
  styleUrl: './request-sender.component.css'
})
export class RequestSenderComponent {
  saluto:any
  counter:number = 0
  constructor(private client:HttpClient){}

  request1(){
    this.client.get<any>("http://localhost:8080/saluti/hello-world").subscribe((response) => {
      try{
        this.counter++
        this.saluto = response.message + this.counter
      }
      catch(error){console.error("Errore con Carlos: ", error)}
    })
  }
}

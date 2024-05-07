import { Component,Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InnerOneComponent } from './inner-one/inner-one.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { SubComponentComponent } from './sub-component/sub-component.component';
import { SComponent } from './classi/utils';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RequestSenderComponent } from './request-sender/request-sender.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, CommonModule,RouterOutlet,
    SubComponentComponent,InnerOneComponent,
    ReactiveFormsModule, SubComponentComponent,
    RequestSenderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Admin';
  something!:string
  myReactiveForm:FormGroup = new FormGroup({myAutore:new FormControl()});
  @Input() authorName!:string
  clickcounter:number = 0
  components:SComponent[] = []


  saySomething(event:string){ //Usato in inner-one
    this.something = event
    alert("Hello, " + this.something)
  }

  searchAuthor(){
    alert("This is an alert from a reactive form, you typed: " + this.authorName)
  }

  buttonClicked(){
    this.clickcounter++
    const component = new SComponent(this.clickcounter)
    this.components.push(component)
  }

}


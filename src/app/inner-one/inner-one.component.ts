import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inner-one',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inner-one.component.html',
  styleUrl: './inner-one.component.css'
})
export class InnerOneComponent {
  @Output() emitter = new EventEmitter<string>()
  @Input() something!:string

  saySomething(){
    this.emitter.emit(this.something)
  }

}

import { Component, Input } from '@angular/core';
import { SComponent } from '../classi/utils';

@Component({
  selector: 'app-sub-component',
  standalone: true,
  imports: [],
  templateUrl: './sub-component.component.html',
  styleUrl: './sub-component.component.css'
})
export class SubComponentComponent {
  @Input() component!:SComponent
}

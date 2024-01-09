import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-beta',
  standalone: true,
  imports: [],
  templateUrl: './beta.component.html',
  styleUrl: './beta.component.css'
})
export class BetaComponent
 {

  @Output () public LaserLight = new EventEmitter();
  public SendMessage()
  {
      this.LaserLight.emit("Hello parent...");
  }
}

import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None  // ← Agrega esto
})
export class AppComponent {
  
  title = 'Ejercicio';
  constructor() {
    console.log('AppComponent initialized');
   }
}
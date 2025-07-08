import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <h1>Hola Angular desde {{city.toLocaleUpperCase()}}</h1>
  `,
  styles: [
    `
    h1{
      color: red;
    }
    `
  ]
})
export class AppComponent {
  city='Culiacan';
}
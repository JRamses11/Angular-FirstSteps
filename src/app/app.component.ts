import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent],
  templateUrl: './app.component.html',
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
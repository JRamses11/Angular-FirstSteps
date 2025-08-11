import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h3>Los juegos favoritos de {{userName}}</h3>
    <ul>
      @for(game of games; track game.id){
        <li>{{game.name}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
   @Input() userName: string = '';
   games=[
    {
      id:1,
      name:'Super Mario Bros',
    },
    {
      id:2,
      name:'The Legend of Zelda',
    },
    {
      id:3,
      name:'The Witcher 3',
    },
  ]
}

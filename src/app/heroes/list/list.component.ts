import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {  

  heroNames: string[] = [ 'Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor' ]

  deletedHero?: string = ''

  removeLast(): void{
   this.deletedHero = this.heroNames.pop()
  }

}

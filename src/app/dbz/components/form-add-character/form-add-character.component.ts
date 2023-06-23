import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './form-add-character.component.html',
  styleUrls: ['./form-add-character.component.css']
})

export class FormAddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  character: Character = {
    id : uuid(),
    name : '',
    power : 0 
  };

  addCharacter(newCharacter:Character):void{
    
    this.character = newCharacter;

    if( this.character.name.length === 0 ) return;
    
    this.onNewCharacter.emit(this.character);

    this.character = {id: uuid(), name: '', power: 0};

  }

}

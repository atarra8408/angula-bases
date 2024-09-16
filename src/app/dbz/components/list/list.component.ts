import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output()
  public onDeleteID: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[]=[{
    name: 'Trunk',
    power: 10
  }]

  onDelete(id: string){

  }

  onDeleteCharacter(id?: string):void{
    if(!id)return;
    this.onDeleteID.emit(id);
  }

}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <div class="input-group ">
  <span [ngClass]="{'border-danger' :!validateData , 'border-dark' : validateData}" class="input-group-text">Search</span>
  <input [ngClass]="{'border-danger' :!validateData , 'border-dark' : validateData}" class="form-control border-"  placeholder="search" #inputValue (keydown.enter)="searchTag()" >
  </div>
    `,
})
export class SearchBoxComponent {

  public validateData : boolean = true;

  constructor( private GifsService: GifsService){}

  @ViewChild('inputValue')
   public tagInput! : ElementRef<HTMLInputElement>;


  searchTag(){
    const valueTag : string = this.tagInput.nativeElement.value;
    this.validateData  = valueTag.length === 0 ? false : true;

    this.GifsService.addTag(valueTag);
    this.tagInput.nativeElement.value = ''
  }
}

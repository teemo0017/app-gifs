import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <div class="input-group ">
  <span class="input-group-text border-dark">Search</span>
  <input class="form-control border-dark"  placeholder="search" #inputValue (keydown.enter)="searchTag()">
  </div>
    `,
})
export class SearchBoxComponent {
  constructor( private GifsService: GifsService){}

  @ViewChild('inputValue')
   public tagInput! : ElementRef<HTMLInputElement>;


  searchTag(){
    const valueTag : string = this.tagInput.nativeElement.value;
    this.GifsService.addTag(valueTag);
    this.tagInput.nativeElement.value = ''
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lazy-image',
  templateUrl: './lazy-image.component.html',

})
export class LazyImageComponent implements OnInit{
  ngOnInit(): void {
    if(!this.linkImage) throw new Error('Url is required');
  }

  @Input()
  public linkImage! : string

  public loaded = false;



  isLoaded(){
    this.loaded = true;
  }
}

import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsList : string [] = [];

get tagsHistory ()  {
  return this._tagsList;
}

addTag (tag : string) : void {
  this._tagsList.unshift(tag);
  console.log(this._tagsList);
}

  constructor() {   }

}

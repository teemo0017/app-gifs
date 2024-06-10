
import { Gifs, SearchResponse } from './../interfaces/gifs.interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })


export class GifsService {

  constructor(private http : HttpClient) {
    this.loadLocalStorage();
  }

  private _listGifs : Gifs[] = [];
  private _tagsList: string[] = [];
  private api_key : string = 'DfdhXdskkn1IoM2pODH4wxSyBL1IwuZP';
  private endPointGiphy : string = 'https://api.giphy.com/v1/gifs'
  private apiSearch : string = '/search';


  get tagsHistory() : string[] {
    return this._tagsList;
  }
  get listGifst() : Gifs[]{
    return this._listGifs;
  }

  addTag(tag: string): void {

    if (tag.length === 0) return;
    this.validatorData(tag);

    const params   = new HttpParams()
    .set('api_key' , this.api_key)
    .set('q' , tag)
    .set('limit' , 10)

    this.http.get<SearchResponse> (`${this.endPointGiphy}${this.apiSearch}`,{ params })
    .subscribe(resp => this._listGifs = resp.data);
  }



  validatorData(tag: string): void {
    tag = tag.toLowerCase();

    if (this._tagsList.includes(tag)) {
      this._tagsList = this._tagsList.filter((word) => word !== tag);
    }

    this._tagsList.unshift(tag);
    this._tagsList = this._tagsList.splice(0, 10);
    this.saveLocalStorage();
  }

  saveLocalStorage() : void {
    localStorage.setItem('TagsHistory',JSON.stringify(this._tagsList));
  }

  loadLocalStorage() : void {
    if(!localStorage.getItem('TagsHistory')) return;

    this._tagsList = JSON.parse(localStorage.getItem('TagsHistory')!);
    this.addTag(this._tagsList[0]);
  }




}

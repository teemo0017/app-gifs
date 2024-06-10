import { Component, Input } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gifs } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private GifsService: GifsService) { }

  ListGifs(): Gifs[] {
    return this.GifsService.listGifst;

  }


}

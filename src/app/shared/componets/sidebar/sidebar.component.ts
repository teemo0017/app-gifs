import { Component, Input } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';


@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private GifsService : GifsService){}


  TagClick (tagName : string) : void {
    this.GifsService.addTag(tagName);
  }

  tags () : string[] {
    return this. GifsService.tagsHistory;
  }


}

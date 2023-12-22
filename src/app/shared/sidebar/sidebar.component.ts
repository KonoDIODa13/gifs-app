import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent  {
  // public tags: string[] = this.gifsService.getTagHistory();

  constructor(private gifsService: GifsService) { }

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }
  onSearchedTag(tag: string): void {
    tag = tag.toLocaleLowerCase();
    if (this.tags[0] === tag) return;
    this.gifsService.searchTag(tag);
    console.log("lol")
  }

}

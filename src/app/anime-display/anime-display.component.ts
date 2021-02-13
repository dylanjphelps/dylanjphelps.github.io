import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-display',
  templateUrl: './anime-display.component.html',
  styleUrls: ['./anime-display.component.scss']
})
export class AnimeDisplayComponent implements OnInit {

  constructor(private animeService : AnimeService) { }

  ngOnInit(): void {
    this.showWinterAnime();
  }

  public showWinterAnime() {
    this.animeService.getWinterAnime()
    .subscribe((data: any) => {      
      console.log(data);
    })
  }
}

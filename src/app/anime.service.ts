import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AnimeService {

  private baseURL = 'https://kitsu.io/api/edge';

  constructor(private httpClient : HttpClient) { }

  public getWinterAnime() {
    return this.httpClient.get(this.baseURL + '/anime?filter[season]=winter')
  }
}

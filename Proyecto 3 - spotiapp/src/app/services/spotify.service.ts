import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  bearer: string = "BQCOGAE9k5BlsjAMJQlcEOwpqYxEDMn0Jvvt2DADjnz_rMQb_DXtO_2GIoXOM-fA3h4KdA1MrknejsUvfUc";

  constructor( private htpp: HttpClient) { }


  getNewReleases() {
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.bearer}`,

    });

    return this.htpp.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }


  getArtista(termino: string) {
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.bearer}`,

    });

    return this.htpp.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers});
  }

}

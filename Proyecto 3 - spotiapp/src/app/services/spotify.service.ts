import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private htpp: HttpClient) { }


  getNewReleases() {
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB1nc7M7H2fC3IU2VxCbyh7NpAcKEJvnr1EGPW25pvdDo0oMStWYCfu0ym8oMyIiYELtYoNAyQ-B1QBloM',

    });

    this.htpp.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .subscribe(data => {
        console.log(data);
      });
  }
}

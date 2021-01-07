import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService{

  constructor( private http: HttpClient){
  }


  getQuery( query: string, token: string) {
    
    const url = `https://api.spotify.com/v1/${query}`;
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    
    return this.http.get(url, {headers});
  }


  async getNewReleases() {

    let token: string = await this.generateToken();
    
    return this.getQuery('browse/new-releases?limit=20', token)
              .pipe( map( data => {
                //return data.albums.items; <- Toca hacer (data: any) en parametros
                return data['albums'].items;
              })).toPromise(); 
  }


  async getArtistas(termino: string) {
    
    let token: string = await this.generateToken();

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`, token)
              .pipe( map(data => data['artists'].items))
              .toPromise();
  }
  
  
  async getArtista(id: string) {
    
    let token: string = await this.generateToken();

    return this.getQuery(`artists/${id}`, token)
              //.pipe( map(data => data['artists'].items))
              .toPromise();
  }
  


  generateToken() {
    let body: string = '';
    body += 'grant_type=client_credentials';
    body += '&client_id=c3617f79b43e415b8a695cd91f543987';
    body += '&client_secret=7bdcfb60b78d48bda65414c98babc61d';
    
    const headers = new HttpHeaders({
      'Content-Type': `application/x-www-form-urlencoded`
    });
    
    return this.http.post('https://accounts.spotify.com/api/token', body, {headers})
          .pipe( map(data => data['access_token']))
          .toPromise();
    
  }
}

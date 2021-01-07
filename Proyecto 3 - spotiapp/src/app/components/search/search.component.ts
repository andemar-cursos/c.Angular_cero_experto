import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artistas: any[] = [];

  loading: boolean = false;

  constructor( private spotify: SpotifyService) { }

  buscar(termino: string) {
    
    this.loading = true;
    this.spotify.getArtista(termino)
      .then( data => {
        this.artistas = data;
        this.loading = false;
      });
  }

}

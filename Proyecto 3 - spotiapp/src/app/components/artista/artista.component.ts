import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean = false;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
  }


  getArtista(id: string) {
    
    this.spotify.getArtista(id)
        .then(artista => {
          this.artista = artista;
          this.loading = false;
        })
  }


  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
        .then(topTracks => {
          this.topTracks = topTracks;
        })
  }
}

import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean = false;
  msgError: string;

  constructor( private spotify: SpotifyService) {

    this.loading = true;

    this.spotify.getNewReleases()
      .then( data => {
        this.nuevasCanciones = data;
        this.loading = false;
      })
      .catch(data => {
        this.msgError = data.error.error.message;
        this.loading = false;
        this.error   = true;
      });
  }

  ngOnInit(): void {
    
  }

}

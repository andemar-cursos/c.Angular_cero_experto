import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'trackSpotify'
})
export class TrackSpotifyPipe implements PipeTransform {

  base: string = 'https://open.spotify.com/embed?uri=';

  constructor(private sanitizer: DomSanitizer){};

  transform(url: unknown): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.base+url);
  }

}

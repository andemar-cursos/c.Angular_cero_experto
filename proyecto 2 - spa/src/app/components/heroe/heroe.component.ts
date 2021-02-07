import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {

  heroe: Heroe;


  constructor(private activatedRoute: ActivatedRoute,
              private heroeService: HeroesService) {

    activatedRoute.params.subscribe(params => {
      this.heroe = this.heroeService.getHeroe(params.id);
    });
  }


}

import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent {

  heroes: Heroe[];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private heroeService: HeroesService)
  {
    activatedRoute.params.subscribe(params => {
      this.heroes = this.heroeService.buscarHeroes(params.termino);
      this.termino = params.termino;
    });
  }

  verHeroe(idx: number): void {

    // Este es un router con js, pero en html hay otra forma. line: 17
    this.router.navigate(['/heroe', idx]);
  }
}

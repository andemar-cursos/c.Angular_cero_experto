import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe = null;
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }


  ngOnInit(): void {
  }

  verHeroe(): void {

    // Este es un router con js, pero en html hay otra forma. line: 17
    this.router.navigate(['/heroe', this.index]);
    // this.heroeSeleccionado.emit(this.index);
  }

}

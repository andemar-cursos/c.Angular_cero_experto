import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
})
export class BodyComponent{

    mostrar = true;

    frase: any = {
        mensaje: 'nmms e.e',
        autor: 'El nmms',
    };

    personajes: string[] = [
        'Spiderman',
        'Venon',
        'Iron man'
    ];

}

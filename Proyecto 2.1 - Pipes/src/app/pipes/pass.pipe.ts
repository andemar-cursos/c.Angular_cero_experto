import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pass'
})
export class PassPipe implements PipeTransform {

  transform(value: string, activo: boolean): String {
    
    if(activo){
      let caracteres = value.split('');

      caracteres = caracteres.map(carac => '*');

      return caracteres.join('');
    }else
      return value;
    

      //Tambien sirve
      // return (activo) ? '*'.repeat(value.length) : value;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultProducto = [];

    for(const producto of value){
      if(producto.product_name.indexOf(arg) > -1){
        resultProducto.push(producto)
      }
    }

    return resultProducto;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'majusculeUneSurX',
  standalone: true
})
export class MajusculeUneSurXPipe implements PipeTransform {

  transform(value: string | undefined, ...args: number[]): string | undefined {
    if (value == undefined) {
      return undefined;
    }

    // On récupère le paramétre reçu
    let modulo = 2;
    if (args && args.length > 0) {
      modulo = args[0];
    }

    let result = "";

    for (let i = 0; i < value.length; i++) {
      let c: string = value[i];

      if (i % modulo == 0) {
        c = c.toUpperCase();
      }

      result += c;
    }

    return result;
  }

}

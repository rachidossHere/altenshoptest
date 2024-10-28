import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterCount',
  standalone: true
})
export class CharacterCountPipe implements PipeTransform {
  transform(value: string, maxLength: number = 300): string {
    const currentLength = value ? value.length : 0;
    return `${currentLength}/${maxLength}`;
  }
}

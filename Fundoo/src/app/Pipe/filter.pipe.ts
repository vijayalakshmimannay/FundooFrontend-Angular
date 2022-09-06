import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  transform(value: any,  filterNote:string) {
    if (filterNote === ''){
      return value;
    }

    const notes = [];
    for(const note of value){
      if (note.title.includes(filterNote)){
        notes.push(note)
      }
    }
    return notes;
    
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderpipe'
})
export class GenderPipe implements PipeTransform {

  transform(value: string, gender : string): string {
    if(gender.toLowerCase()=="male"){
      return "Mr. "+value;
    }
    else{
    return "Mrs. "+value;
    }
  }

}

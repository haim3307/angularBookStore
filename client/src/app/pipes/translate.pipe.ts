import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
      switch (value) {
          case 'adventure' : return 'הרפתקאות';
          case 'romance' : return 'רומנטיקה';
          case 'war' : return 'מלחמה';
          case 'fantasy' : return 'פנטזיה';
          default : return value;
      }
  }

}

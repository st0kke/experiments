import { Injectable } from '@angular/core';
import { Month } from './models';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HolidayService {

  months: Month[] = [] ;

  constructor() { }

  calculateHolidays(year): Observable<Month[]> {

    this.months.push({
      name: 'January',
      days: 'WHHHHHHHHWHHHHHHHWHHHHHHHHW',
      holidays: '01 02 03 04 11 12 13 14 21 22'
    });
    this.months.push({
      name: 'February',
      days: 'WHHHHHHHHWHHHHHHHWHHHHHHHHW',
      holidays: '01 02 03 04 11 12 13 14 21 22'
    });
    this.months.push({
      name: 'March',
      days: 'WHHHHHHHHWHHHHHHHWHHHHHHHHW',
      holidays: '01 02 03 04 11 12 13 14 21 22'
    });

    return of(this.months);
  }

}

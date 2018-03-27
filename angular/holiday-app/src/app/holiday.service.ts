import { Injectable } from '@angular/core';

@Injectable()
export class HolidayService {

  months: Object[] = [] ;

  constructor() { }

  calculateHolidays(year) {

    this.months.push({
      month: 'January',
      days: 'WHHHHHHHHWHHHHHHHWHHHHHHHHW',
      holidays: '01 02 03 04 11 12 13 14 21 22'
    });
    this.months.push({
      month: 'February',
      days: 'WHHHHHHHHWHHHHHHHWHHHHHHHHW',
      holidays: '01 02 03 04 11 12 13 14 21 22'
    });
    this.months.push({
      month: 'March',
      days: 'WHHHHHHHHWHHHHHHHWHHHHHHHHW',
      holidays: '01 02 03 04 11 12 13 14 21 22'
    });

    return this.months;
  }

}

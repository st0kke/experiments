import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SqlgeneratorService {

  constructor() { }


  getHolidaySQL(year: String, holidayString: String): Observable<String[]> {
    const holidaySql: String[] = [];
    holidaySql.push('insert into fi' + year + ' values(' + holidayString + ');');
    holidaySql.push('insert into se' + year + ' values(' + holidayString + ');');

    return of(holidaySql);
  }

  getDaySQL(year: String, dayString: String): Observable<String[]> {
    const daySql: String[] = [];
    daySql.push('insert into fi' + year + ' values(' + dayString + ');');
    daySql.push('insert into se' + year + ' values(' + dayString + ');');

    return of(daySql);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { SqlgeneratorService } from '../sqlgenerator.service';

@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.css']
})
export class SqlComponent implements OnInit {

  @Input() year: String;
  @Input() month: String;
  @Input() holidayString: String;
  @Input() dayString: String;

  holidaySql: String[];
  daySql: String[];

  constructor(private sqlService: SqlgeneratorService) { }

  ngOnInit() {
    this.sqlService.getHolidaySQL(this.year, this.holidayString).subscribe(results => this.holidaySql = results);
    this.sqlService.getHolidaySQL(this.year, this.dayString).subscribe(results => this.daySql = results);
  }

}

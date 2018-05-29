import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HolidayService } from './holiday.service';
import { Month } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Holiday String Calculator';
  years = [];
  inputYear;
  months: Month[];

  constructor(private holidayService: HolidayService) {}

  removeYear(aYear) {
    this.years = this.years.filter(e => e !== aYear);
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.inputYear = form.value.inputYear;
      if (!this.years.find(e => e === this.inputYear)) {
        this.years.push(this.inputYear);
        this.holidayService.calculateHolidays(this.inputYear).subscribe(months => this.months = months);

        console.log('Months', this.months);
      }
    }
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'holiday string calculator';
  newYear;
  years = [2018, 2019];

  addyear() {
    this.years.push(this.newYear);
  }

  removeYear(aYear) {
    // console.log('remove ' + aYear);
    this.years = this.years.filter(e => e !== aYear);
  }

  newItem(form: NgForm) {
    if (form.valid) {
      console.log('nachos!');
      this.years.push(form.value.newYear);

    }
  }

}

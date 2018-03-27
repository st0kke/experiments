import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.css']
})
export class MonthsComponent implements OnInit {

  @Input() selectedMonth;
  @Input() month;
  @Input() holidayString;
  @Input() dayString;
  @Output() monthClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  monthClick() {
    this.monthClicked.emit();
  }

}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.css']
})
export class MonthsComponent implements OnInit {

  @Input() year;
  @Output() yearEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  yearClicked() {
    this.yearEvent.emit();
  }

}

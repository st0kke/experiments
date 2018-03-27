import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MonthsComponent } from './months/months.component';
import { HolidayService } from './holiday.service';


@NgModule({
  declarations: [
    AppComponent,
    MonthsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HolidayService],
  bootstrap: [AppComponent]
})
export class AppModule { }

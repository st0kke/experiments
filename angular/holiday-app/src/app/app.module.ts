import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonthsComponent } from './months/months.component';
import { HolidayService } from './holiday.service';
import { SqlgeneratorService } from './sqlgenerator.service';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SqlComponent } from './sql/sql.component';


@NgModule({
  declarations: [
    AppComponent,
    MonthsComponent,
    SqlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [HolidayService, SqlgeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

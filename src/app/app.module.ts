import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { AppComponent } from './app.component';
import { CustomDataTableComponent } from './custom-data-table/custom-data-table.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomDataTableComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

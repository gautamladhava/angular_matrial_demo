import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { BottomsheetComponent } from './bottomsheet/bottomsheet.component';
import { OpensheetComponent } from './opensheet/opensheet.component';
import { ModulModule } from './modul/modul.module';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DilogComponent } from './dilog/dilog.component';
import { OpenDilogComponent } from './open-dilog/open-dilog.component';
import { OpernBgDilogComponent } from './opern-bg-dilog/opern-bg-dilog.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SnackComponent } from './snack/snack.component';
import { OpenSnackComponent } from './open-snack/open-snack.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BottomsheetComponent,
    OpensheetComponent,
    DatepickerComponent,
    DilogComponent,
    OpenDilogComponent,
    OpernBgDilogComponent,
    SidebarComponent,
    SnackComponent,
    OpenSnackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModulModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

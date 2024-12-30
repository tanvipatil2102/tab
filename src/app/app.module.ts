import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabComponent } from './shared/components/tab/tab.component';
import { TabNgForComponent } from './shared/components/tab-ng-for/tab-ng-for.component';
import { NgSwitchComponent } from './shared/components/ng-switch/ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabNgForComponent,
    NgSwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

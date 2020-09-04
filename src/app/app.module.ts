import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { HeaderComponent } from './includes/header/header.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';
import { EasyuiComponent } from './easyui/easyui.component';

@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    ObservableComponent,
    HeaderComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    EasyuiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    EasyUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

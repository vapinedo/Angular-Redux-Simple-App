import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';

import { AppComponent } from './app.component';
import { ChildComponent } from './counter/child/child.component';
import { GrandChildComponent } from './counter/grand-child/grand-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandChildComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer }), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

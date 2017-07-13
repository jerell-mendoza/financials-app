import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { operationsReducer } from './common/operations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({
      operations: operationsReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

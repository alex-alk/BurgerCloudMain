import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecentsComponent } from './recents/recents.component';

import { HttpClientModule} from '@angular/common/http';
import { DesignComponent } from './design/design.component';

@NgModule({
  declarations: [
    AppComponent,
    RecentsComponent,
    DesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

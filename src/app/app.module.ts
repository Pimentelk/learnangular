import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArtistItemComponent } from './artist.component';
import { ArtistDetailComponent } from './details.component';

import { SearchPipe } from './pipe.search';

@NgModule({
  declarations: [
    AppComponent,
    ArtistItemComponent,
    ArtistDetailComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
  	AppComponent
  ]
})
export class AppModule { }

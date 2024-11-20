import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { ReversePipe } from './reverse.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { AddPrefixPipe } from './add-prefix.pipe';
import { FormsModule } from '@angular/forms';
import { PrimeNumberPipe } from './prime-number.pipe';
import { TruncatePipePipe } from './truncate-pipe.pipe';
import { HtmlStripPipePipe } from './html-strip-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeExampleComponent,
    ReversePipe,
    CapitalizePipe,
    AddPrefixPipe,
    PrimeNumberPipe,
    TruncatePipePipe,
    HtmlStripPipePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

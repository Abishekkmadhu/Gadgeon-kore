import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgileComponent } from './agile/agile.component';
import { SimplifyComponent } from './simplify/simplify.component';
import { InnovativeComponent } from './innovative/innovative.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { CustpipesPipe } from './custpipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AgileComponent,
    SimplifyComponent,
    InnovativeComponent,
    DemoPipeComponent,
    CustpipesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

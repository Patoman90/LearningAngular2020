import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BravoComponent } from './bravo/bravo.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AlphaComponent,
    BravoComponent
  ],
    
  imports: [
    //Form feature imports of Angular.
    BrowserModule,
    FormsModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

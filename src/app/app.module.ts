import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//servicios
import { ServicioService } from './providers/servicio.service';

//componentes
import { AppComponent } from './app.component';
import { UnoComponent } from './uno/uno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

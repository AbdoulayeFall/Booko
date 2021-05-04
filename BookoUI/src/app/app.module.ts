import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import { EditChauffeurComponent } from './chauffeur/edit-chauffeur/edit-chauffeur.component';
import { ShowChauffeurComponent } from './chauffeur/show-chauffeur/show-chauffeur.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ChauffeurComponent,
    EditChauffeurComponent,
    ShowChauffeurComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

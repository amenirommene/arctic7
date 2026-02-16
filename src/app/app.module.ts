import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ListSuggestionsComponent } from './features/suggestions/list-suggestions/list-suggestions.component';
import { UserStatusComponent } from './core/user-status/user-status.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,//composant racine, créé par défaut
    HeaderComponent,
    FooterComponent,
    UserStatusComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //directive ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

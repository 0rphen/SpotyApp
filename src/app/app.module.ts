import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { CardsComponent } from './components/cards/cards.component';
import { LoadingComponent } from './components/share/loading/loading.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        ArtistComponent,
        NavbarComponent,
        NoimagePipe,
        DomseguroPipe,
        CardsComponent,
        LoadingComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(ROUTES, { useHash: true })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

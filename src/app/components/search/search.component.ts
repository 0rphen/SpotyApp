import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    artists: any[] = [];

    constructor(private spotify: SpotifyService) { }

    ngOnInit() {
    }

    buscar(termino: string) {
        this.spotify.getArtists(termino)
            .subscribe(data => {
                this.artists = data;
            });
    }
}

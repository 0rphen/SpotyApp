import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {

    constructor(private http: HttpClient) {
    }

    getQuery(query: string) {
        const url = `https://api.spotify.com/${query}`;
        const headers = new HttpHeaders({
            'Authorization': 'Bearer BQB8RCiuaxR8BfGAwXhOgxn6g0en5IyRYV0J3o6Xw6Ncm6knv6lu1V1XAt9DyK2jWp7GaFYHvaZ9tRR7fawPsBWMlX5xJfCOiZjuD0vKLfGueJ79AfIRsvpaFz7neUcATuEKkMJEjUmnAhUs'
        });

        return this.http.get(url, { headers });
    }

    getNewReleases() {
        return this.getQuery('v1/browse/new-releases').pipe(map(data => data['albums'].items));
    }

    getArtist(index: string) {
        return this.getQuery(`v1/search?q=${index}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
    }
}

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
            'Authorization': 'Bearer BQD0gP4Zj5xIociMIUeyC-JHGBGm7WM0KCjxWwYU1LgYVdUEWJReDc-4atiV9eyN6FKazpF56JoOWremlutNYPPbp3cD-2IpXBSZ1hZWx8A_l_61Qy-PljCwALkNvDPVLWogLFq_iDO6MfQY'
        });

        return this.http.get(url, { headers });
    }

    getNewReleases() {
        return this.getQuery('v1/browse/new-releases').pipe(map(data => data['albums'].items));
    }

    getArtists(index: string) {
        return this.getQuery(`v1/search?q=${index}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
    }

    getArtist(id: string) {
        return this.getQuery(`v1/artists/${id}`);
    }

    getTopTracks(id: string) {
        console.log(id);
        return this.getQuery(`v1/artists/${id}/top-tracks?country=US`).pipe(map(data => data['tracks']));
    }
}

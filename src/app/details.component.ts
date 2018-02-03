import { Component } from '@angular/core';
import { Artist } from './artist.interface';

@Component({
	selector: 'artist-details',
	templateUrl: '../assets/partials/details.html',
	styleUrls: ['../assets/css/details.css'],
	inputs: ['artist']
})

export class ArtistDetailComponent {
	public artist: Artist;
}

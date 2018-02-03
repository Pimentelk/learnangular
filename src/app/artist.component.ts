import { Component } from '@angular/core';
import { Artist } from './artist.interface';

@Component({
	selector: 'artist-item',
	templateUrl: '../assets/partials/artist.html',
	styleUrls: ['../assets/css/artist.css'],
	inputs: ['artist']
})

export class ArtistItemComponent {
	public artist: Artist;
}
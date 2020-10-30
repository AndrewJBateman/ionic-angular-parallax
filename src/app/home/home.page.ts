import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	myImagePath =
		'https://images.unsplash.com/photo-1601652290498-0b5f418541a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQi0jEyMDd9&auto=format&fit=crop&w=2850&q=80';
	constructor() {}
}

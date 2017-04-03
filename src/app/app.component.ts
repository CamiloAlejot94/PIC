// -----------------------------------------------------------------
// Components
// -----------------------------------------------------------------
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { environment } from './environment';
// -----------------------------------------------------------------
// Pages
// -----------------------------------------------------------------
import { Registro } from '../pages/registro/registro'
// -----------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------
import * as firebase from 'firebase';




@Component({
	templateUrl: 'app.html'
})
export class MyApp {

	// -----------------------------------------------------------------
	// Atributos
	// -----------------------------------------------------------------

	@ViewChild(Nav) nav: Nav;

	rootPage: any = Registro;

	pages: Array<{ title: string, component: any }>;

	// -----------------------------------------------------------------
	// Atributos
	// -----------------------------------------------------------------
	constructor(public platform: Platform) {
		this.initializeApp();
		// inicializa el servicio de firebase
		firebase.initializeApp(environment.firebaseConfig)
		// Estructura para navegar entre páginas
		this.pages = [
			{ title: 'Registro', component: Registro },
			
		];
	}

	// -----------------------------------------------------------------
	// Metodos
	// -----------------------------------------------------------------

	/**
	 * Function that generate logic where device is ready
	 * @memberOf MyApp
	 */
	initializeApp() {
		this.platform.ready().then(() => {
			StatusBar.styleDefault();
			Splashscreen.hide();
		});
	}

	/**
	 * Open a page of navigate
	 * @param {any} page
	 * @memberOf MyApp
	 */
	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}

	/**
	 * Check state of user 
	 * @memberOf MyApp
	 */
	userSatate() {
		firebase.auth().onAuthStateChanged(((user: firebase.User) => {
			if(user){
				// User logIn
			}
			else{
				// User logOut
			}
		}))
	}
}

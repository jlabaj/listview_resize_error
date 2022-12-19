import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export const getBaseUrl = () => {
	return document.getElementsByTagName('base')[0].href;
};

const providers = [
	{ provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];

if (environment.production) {
	enableProdMode();
}
const init = () => {
	platformBrowserDynamic(providers).bootstrapModule(AppModule, { ngZoneEventCoalescing: true })
		.then(ref => {
			// Ensure Angular destroys itself on hot reloads.
			if (window['ngRef']) {
				window['ngRef'].destroy();
			}
			window['ngRef'] = ref;

			// Otherwise, log the boot error
		})
		.catch(err => console.error(err));

	defineCustomElements(window);
};

init();

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'reflect-metadata';
// import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularSplitModule } from 'angular-split';
import devextremeAjax from 'devextreme/core/utils/ajax';
import { SnotifyModule } from 'ng-alt-snotify';
import { SortablejsModule } from 'ngx-sortablejs';
import { AppComponent } from './app.component';
// import { CacheInterceptor } from './core/interceptors/cache.interceptor';
import { CommonModule } from '@angular/common';
import { sendRequestFactory } from './dx-http-client-helper';
import { DxPopoverModule } from 'devextreme-angular';


@NgModule({
	imports: [
		BrowserModule,
		CommonModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		DxPopoverModule,
		AngularSplitModule.forRoot(),
		SortablejsModule.forRoot({ animation: 250, swapThreshold: .65 }),
		SnotifyModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(httpClient: HttpClient) {
		devextremeAjax.inject({ sendRequest: sendRequestFactory(httpClient) });
	}
}

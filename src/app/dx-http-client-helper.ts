
// Based on https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/experiment/ng-http-client/experiments/ng-http-client-helper.js
import { HttpClient } from '@angular/common/http';
import { Deferred } from 'devextreme/core/utils/deferred';

// tslint:disable-next-line: only-arrow-functions typedef
export function sendRequestFactory(httpClient: HttpClient) {
	let nonce = Date.now();

// tslint:disable-next-line: only-arrow-functions typedef
	function createXhrSurrogate(response) {
// tslint:disable-next-line: only-arrow-functions typedef
		function getResponseHeader(name) {
			return response.headers.get(name);
		}
// tslint:disable-next-line: only-arrow-functions typedef
		function makeResponseText() {
			const body = 'error' in response ? response.error : response.body;

			if (typeof body !== 'string' || String(getResponseHeader('Content-Type')).indexOf('application/json') === 0) {
				return JSON.stringify(body);
			}

			return body;
		}

		return {
			status: response.status,
			statusText: response.statusText,
			getResponseHeader,
			responseText: makeResponseText()
		};
	}

	// tslint:disable-next-line: only-arrow-functions typedef
	function getAcceptHeader(options) {
		const dataType = options.dataType;
		const accepts = options.accepts;
		const fallback = ',*/*;q=0.01';

		if (dataType && accepts && accepts[dataType]) {
			return accepts[dataType] + fallback;
		}

		switch (dataType) {
			case 'json': return 'application/json, text/javascript' + fallback;
			case 'text': return 'text/plain' + fallback;
			case 'xml': return 'application/xml, text/xml' + fallback;
			case 'html': return 'text/html' + fallback;
			case 'script': return 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' + fallback;
		}

		return '*/*';
	}

	return (options) => {
		const d = Deferred();

		const method = (options.method || 'get').toLowerCase();
		const headers = { ...options.headers };
		const data = options.data;
		const xhrFields = options.xhrFields;

		if (options.cache === false && method === 'get' && data) {
			data._ = nonce++;
		}

		if (!headers.Accept) {
			headers.Accept = getAcceptHeader(options);
		}

		httpClient
			.request(
				method,
				options.url,
				{
					params: data,
					responseType: options.dataType,
					headers,
					withCredentials: xhrFields && xhrFields.withCredentials,
					observe: 'response'
				}
			)
			.subscribe(
				(response) => d.resolve(response.body, 'success', createXhrSurrogate(response)),
				(response) => d.reject(createXhrSurrogate(response), 'error')
			);

		return d.promise();
	};
}

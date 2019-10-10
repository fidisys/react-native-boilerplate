import store from '../store/configureStore';
import NavigationService from './navigationService';
// import {removeDefaultAccount,removeApiKey} from './storageService';


const myHeaders = new Headers({
	'Content-Type': 'application/x-www-form-urlencoded'
});

export function appendHeader(name, value) {
	myHeaders.set(name, value);
}
export function setContentType(value) {
	myHeaders.set('Content-Type', value);
}
export function setAuthorization(auth) {
	myHeaders.set('Authorization', `Bearer ${auth}`)
}
export function removeHeader(name) {
	myHeaders.delete(name);
}
export default function request(url, method, payload = {}) {
	const params = {
		method: method,
		headers: myHeaders,
	};
	if (method === 'post' && Object.entries(payload).length !== 0) {
		params.body = JSON.stringify(payload);
	}
	return fetch(url, params)
		.then(response => {
			return new Promise((resolve, reject) => {
				 if ((response.status >= 200 && response.status < 300)) {
					response.json().then(json => {
						resolve(json);
					});
				}
				else {
					response.json().then(json => {
						// showToast(json.message,1000,'danger')
					});
					
					reject(response);
				}
			});
		})
		.catch((error)=> {
			if(error.status === 403){
				// removeDefaultAccount();
				store.dispatch({
					type: 'RESET_DASHBOARD'
				});
				// store.dispatch(chageAccountSelection(true))
				// NavigationService.navigate('Home');
			}
			else if(error.status === 401){
				store.dispatch({
					type: 'RESET_APP'
				});
				resetFetch();
				// removeApiKey();
				// NavigationService.navigate('Authentication');
			}
			throw error;
		});
}

export function resetFetch() {
	// appendHeader('Authorization', `Basic ${Basic_Token}`);
	// setContentType('application/x-www-form-urlencoded');
	// appendHeader('x-visionlink-CustomerUID', '');
	// appendHeader('x-api-key', '');
}
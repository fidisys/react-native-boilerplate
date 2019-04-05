const myHeaders = new Headers({
	'Content-Type': 'application/json; charset=UTF-8',
});

export function appendHeader(name, value) {
	myHeaders.append(name, value);
}
export function removeHeader(name) {
	myHeaders.delete(name);
}
export default function request(url, method, payload = {}) {
	const params = {
		method: method,
		headers: myHeaders,
	};
	if (method === 'post') {
		params.body = JSON.stringify(payload);
	}
	return fetch(url, params)
		.then(checkStatus)
		.then(parseJSON);
}

function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response;
	}
	const error = new Error(response.statusText);
	error.response = response;
	return error;
}

function parseJSON(response) {
	if (response.status === 204 || response.status === 205) {
		return null;
	}
	return response.json();
}

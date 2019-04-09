import 'whatwg-fetch';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json().catch((err) => {
    console.error(`${err} happened, but no big deal!`);
    return {};
  });
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function checkResponseContentType(response) {
  if (response.headers.get('content-type').includes('application/json')) {
    return parseJSON(response);
  }
  return response;
}

export function makeReqOptions(params = {}) {
  const options = {
    method: 'GET',
    headers: {
      Accept: '*/*',
    },
  };

  if (params.contentType) {
    options.headers['Content-Type'] = params.contentType;
  } else {
    options.headers['Content-Type'] = 'application/json';
  }

  if (params.apiKey) {
    options.headers['X-Api-Key'] = params.apiKey;
  }

  if (params.method) {
    options.method = params.method;
  }
  // console.log(options);

  if ((params.method === 'POST' || params.method === 'PUT') && params.data) {
    if (options.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      const searchParams = Object.keys(params.data).map((key) => (
        `${encodeURIComponent(key)}=${encodeURIComponent(params.data[key])}`
      )).join('&');
      options.body = searchParams;
    } else if (options.headers['Content-Type'] === 'application/json') {
      options.body = JSON.stringify(params.data);
    } else {
      // this is to handle multipart-formdata and other such content types
      options.body = params.data;
      // options.mode = 'no-cors';
    }
  } else if (params.data) {
    options.queryParams = params.data;
  }
  if (params.payload) {
    options.queryParams = params.payload;
  }
  return options;
}


/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  const requestURL = new URL(url);
  if (options.queryParams) {
    Object.keys(options.queryParams).forEach((key) => {
      requestURL.searchParams.append(key, options.queryParams[key]);
    });
  }

  return fetch(requestURL, options)
    .then(checkStatus)
    .then(checkResponseContentType);
}

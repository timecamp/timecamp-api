
export default class HttpRequest {

  static get fetchDefaultOptions() {
    return {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
  }

  static fetchOptionsWithToken(token){
    return {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-TimeCamp-Api-Token': token
      },
    }
  }

  static get(url, extraOptions = {}, token) {
    const options = Object.assign(
      { method: 'get' },
      token != null ? HttpRequest.fetchOptionsWithToken(token) : HttpRequest.fetchDefaultOptions,
      extraOptions
    );
    return HttpRequest.fireRequest(url, options);
  }

  static post(url, jsonPayload = {}, extraOptions = {}, token) {
    const options = Object.assign(
      { method: 'post' },
      { body: JSON.stringify(jsonPayload) },
      token != null ? HttpRequest.fetchOptionsWithToken(token) : HttpRequest.fetchDefaultOptions,
      extraOptions
    );
    
    return HttpRequest.fireRequest(url, options);
  }

  static put(url, jsonPayload, extraOptions = {}, token) {
    const options = Object.assign(
      { method: 'put' },
      { body: JSON.stringify(jsonPayload) },
      token != null ? HttpRequest.fetchOptionsWithToken(token) : HttpRequest.fetchDefaultOptions,
      extraOptions
    );
    return HttpRequest.fireRequest(url, options);
  }

  static patch(url, jsonPayload, extraOptions = {}, token) {
    const options = Object.assign(
      { method: 'patch' },
      { body: JSON.stringify(jsonPayload) },
      token != null ? HttpRequest.fetchOptionsWithToken(token) : HttpRequest.fetchDefaultOptions,
      extraOptions
    );
    return HttpRequest.fireRequest(url, options);
  }

  static delete(url, extraOptions = {}, token) {
    const options = Object.assign(
      { method: 'delete' },
      token != null ? HttpRequest.fetchOptionsWithToken(token) : HttpRequest.fetchDefaultOptions,
      extraOptions
    );
    return HttpRequest.fireRequest(url, options);
  }

  static fireRequest(url, options) {
    return fetch(url, options);
  }
}

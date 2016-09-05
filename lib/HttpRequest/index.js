
export default class HttpRequest {

  static get fetchDefaultOptions() {
    return {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
  }

  static get(url, extraOptions = {}) {
    const options = Object.assign(
      { method: 'get' },
      HttpRequest.fetchDefaultOptions,
      extraOptions
    );
    return HttpRequest.fireRequest(url, options);
  }

  static post(url, jsonPayload = {}, extraOptions = {}) {
    const options = Object.assign(
      { method: 'post' },
      { body: JSON.stringify(jsonPayload) },
      HttpRequest.fetchDefaultOptions,
      extraOptions
    );
    return HttpRequest.fireRequest(url, options);
  }

  static put(url, jsonPayload, extraOptions = {}) {
    const options = Object.assign(
      { method: 'put' },
      { body: JSON.stringify(jsonPayload) },
      HttpRequest.fetchDefaultOptions,
      extraOptions
    );
    return HttpRequest.fireRequest(url, options);
  }

  static patch(url, jsonPayload, extraOptions = {}) {
    const options = Object.assign(
      { method: 'patch' },
      { body: JSON.stringify(jsonPayload) },
      HttpRequest.fetchDefaultOptions,
      extraOptions
    );
    return HttpRequest.fireRequest(url, options);
  }

  static delete(url, extraOptions = {}) {
    const options = Object.assign(
      { method: 'delete' },
      HttpRequest.fetchDefaultOptions,
      extraOptions
    );
    return HttpRequest.fireRequest(url, options);
  }

  static fireRequest(url, options) {
    return fetch(url, options);
  }
}

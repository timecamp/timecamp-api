import autobind from 'class-autobind';
import HttpRequest from '../HttpRequest';
import ApiResponse from '../ApiResponse';

export default class ApiRequest {
  constructor(restApiUrlBuilder) {
    autobind(this);

    this.token = null;

    this.restApiUrlBuilder = restApiUrlBuilder;
  }

  setToken(token){
    this.token = token;
  }

  async dispatch(method, data, endpoint) {
    let httpResponse;
    switch (method.toUpperCase()) {
      case 'GET': {
        httpResponse = await HttpRequest.get(
          this.restApiUrlBuilder.setSuffix(endpoint),
          {
            credentials: 'include',
          },
          this.token
        );
        break;
      }
      case 'POST': {
        httpResponse = await HttpRequest.post(
          this.restApiUrlBuilder.setSuffix(endpoint),
          data,
          {
            credentials: 'include',
          },
          this.token
        );
        break;
      }

      case 'PUT': {
        httpResponse = await HttpRequest.put(
          this.restApiUrlBuilder.setSuffix(endpoint),
          data,
          {
            credentials: 'include',
          },
          this.token
        );
        break;
      }
      case 'PATCH': {
        httpResponse = await HttpRequest.patch(
          this.restApiUrlBuilder.setSuffix(endpoint),
          data,
          {
            credentials: 'include',
          },
          this.token
        );
        break;
      }
      case 'DELETE': {
        httpResponse = await HttpRequest.delete(
          this.restApiUrlBuilder.setSuffix(endpoint),
          {
            credentials: 'include',
          },
          this.token
        );
        break;
      }
      default: {
        throw new Error(`Method not implemented "${method}".`);
      }
    }

    const response = await ApiResponse.parseHttpResponse(httpResponse);
    return response;
  }

}

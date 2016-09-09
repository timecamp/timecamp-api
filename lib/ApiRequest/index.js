import autobind from 'class-autobind';
import HttpRequest from '../HttpRequest';
import ApiResponse from '../ApiResponse';

export default class ApiRequest {
  constructor(restApiUrlBuilder, apiToken) {
    autobind(this);

    this.restApiUrlBuilder = restApiUrlBuilder;
    this.httpRequest = new HttpRequest(apiToken);
  }

  async dispatch(method, data, endpoint) {
    let httpResponse;
    switch (method.toUpperCase()) {
      case 'GET': {
        httpResponse = await this.httpRequest.get(
          this.restApiUrlBuilder.setSuffix(endpoint),
          {
            credentials: 'include',
          }
        );
        break;
      }
      case 'POST': {
        httpResponse = await this.httpRequest.post(
          this.restApiUrlBuilder.setSuffix(endpoint),
          data,
          {
            credentials: 'include',
          }
        );
        break;
      }

      case 'PUT': {
        httpResponse = await this.httpRequest.put(
          this.restApiUrlBuilder.setSuffix(endpoint),
          data,
          {
            credentials: 'include',
          }
        );
        break;
      }
      case 'PATCH': {
        httpResponse = await this.httpRequest.patch(
          this.restApiUrlBuilder.setSuffix(endpoint),
          data,
          {
            credentials: 'include',
          }
        );
        break;
      }
      case 'DELETE': {
        httpResponse = await this.httpRequest.delete(
          this.restApiUrlBuilder.setSuffix(endpoint),
          {
            credentials: 'include',
          }
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

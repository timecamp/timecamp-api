import autobind from 'class-autobind';
import HttpRequest from '../HttpRequest';
import ApiResponse from '../ApiResponse';

export default class ApiRequest {
  constructor(restApiUrlBuilder) {
    autobind(this);

    this.restApiUrlBuilder = restApiUrlBuilder;
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

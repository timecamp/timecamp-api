import autobind from 'class-autobind';

import ApiError from '../ApiError';

export default class ApiResponse {
  constructor(error, data) {
    autobind(this);

    this.error = error;
    this.data = data;
  }
}

ApiResponse.parseHttpResponse = async (httpResponse) => {
  const httpJson = await httpResponse.json();

  console.debug('HTTP response:');
  console.debug(httpJson);

  const { message, code, response } = httpJson;
  let apiError;
  if (code !== 0) {
    apiError = new ApiError(code, message, []);
  }
  return new ApiResponse(apiError, response);
};

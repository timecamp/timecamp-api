
import * as C from './constants';
import autobind from 'class-autobind';

// import 'utils/stringFormat';

import ApiError from './ApiError';
import StringBuilder from './StringBuilder';

import SyncGateway from './SyncGateway';

import ApiRequest from './ApiRequest';

import Projects from './projects';

export default class TimeCampApi {

  constructor(
    restApiEndpoint = 'https://api.timecamp.com/v3/',
    syncGatewayEndpoint = 'https://api.timecamp.com:4984/timecamp',
    allowUnsecureRequests = false,
    useToken = false
  ) {
    if (!this.isUrlSecure(restApiEndpoint) && !allowUnsecureRequests) {
      throw new ApiError(0, C.MESSAGE_INSECURE_PROTOCOL, [`${restApiEndpoint}`]);
    }

    if (!this.isUrlSecure(syncGatewayEndpoint) && !allowUnsecureRequests) {
      throw new ApiError(0, C.MESSAGE_INSECURE_PROTOCOL, [`${syncGatewayEndpoint}`]);
    }

    this.restApiEndpoint = this.appendSlash(restApiEndpoint);
    this.syncGatewayEndpoint = this.appendSlash(syncGatewayEndpoint);

    this.apiRequest = new ApiRequest(new StringBuilder(this.restApiEndpoint), null);
    this.syncGateway = new SyncGateway(this.apiRequest, syncGatewayEndpoint);
    this.projects = new Projects(this);

    this.useToken = useToken;

    autobind(this);
  }

  appendSlash(url) {
    return url.replace(/\/?(\?|#|$)/, '/$1');
  }

  isUrlSecure(url) {
    return url.startsWith('https:');
  }

  setToken(token){
    if(this.useToken){
      this.apiRequest = new ApiRequest(new StringBuilder(this.restApiEndpoint), token);
    }
  }

  async authenticate(username, password) {
    return await this.apiRequest.dispatch(
      'post',
      {
        login: username,
        password,
        type: 'cookie',
      },
      C.USER_AUTHENTICATE,
    );
  }

  async authenticateWithToken(username, password, deviceId, appName) {
    let apiResponse = await this.apiRequest.dispatch(
      'post',
      {
        login: username,
        password,
        deviceId,
        appName,
        type: 'token',
      },
      C.USER_AUTHENTICATE,
    );

    if(!apiResponse.error){
      this.apiRequest = new ApiRequest(new StringBuilder(this.restApiEndpoint), apiResponse.data.token);    
    }

    return apiResponse;
  }

  async userInfo() {
    return await this.apiRequest.dispatch(
      'get',
      false,
      C.THIS_USER_INFORMATION,
    );
  }

  async updateUserInfo(userInfo) {
    return await this.apiRequest.dispatch(
      'patch',
      userInfo,
      C.THIS_USER_INFORMATION,
    );
  }


  async userNotifications() {
    return await this.apiRequest.dispatch(
      'get',
      false,
      C.THIS_USER_NOTIFICATIONS,
    );
  }

  async userTimer() {
    return await this.apiRequest.dispatch(
      'get',
      false,
      C.THIS_USER_TIMER,
    );
  }

  async updateUserTimer(data) {
    return await this.apiRequest.dispatch(
      'patch',
      data,
      C.THIS_USER_TIMER,
    );
  }


  async register(username, password) {
    return await this.apiRequest.dispatch(
      'post',
      {
        email: username,
        password,
        name: username,
      },
      C.USER_REGISTER,
    );
  }

  async resetPassword(email){
    return await this.apiRequest.dispatch(
      'post',
      false,
      C.USER_RESET_PASSWORD_BY_USER_EMAIL.replace('{userEmail}', email)
    );
  }

  // async updateUserInfo(fields) {
  //   let request = await HttpRequest.patch(
  //     this.restApiUrlBuilder.setSuffix(C.THIS_USER_INFORMATION),
  //     fields,
  //     {
  //       credentials: 'include'
  //     }
  //   );

  //   let response = await ApiResponse.parseHttpResponse(httpResponse);
  //   return response;
  // }

  // async userNotifications() {
  //   let request = await HttpRequest.get(
  //     this.restApiUrlBuilder.setSuffix(C.THIS_USER_NOTIFICATIONS),
  //     {
  //       credentials: 'include'
  //     }
  //   );

  //   let response = await ApiResponse.parseHttpResponse(httpResponse);
  //   return response;
  // }

  // async updatePassword(resetPasswordTokenFromEmail) {
  //   let request = HttpRequest.get(
  //     this.restApiUrlBuilder.setSuffix(C.THIS_USER_NOTIFICATIONS),
  //     {
  //       resetPasswordToken: resetPasswordTokenFromEmail
  //     }
  //   );

  //   let response = await ApiResponse.parseHttpResponse(httpResponse);
  //   return response;
  // }

  // async sendResetPasswordEmail(userIdOrEmail) {
  //   let request = HttpRequest.post(
  //     this.restApiUrlBuilder.setSuffix(C.USER_RESET_PASSWORD_BY_USER_EMAIL.format(userIdOrEmail)),
  //     {},
  //     {
  //       credentials: 'include'
  //     }
  //   );

  //   let response = await ApiResponse.parseHttpResponse(httpResponse);
  //   return response;

  // }

  // activeProjects() {
  //   let request = HttpRequest.get(
  //     this.restApiUrlBuilder.setSuffix(C.THIS_USER_ACTIVE_PROJECTS),
  //     {},
  //     {
  //       credentials: 'include'
  //     }
  //   );

  //   return request;

  // }

}

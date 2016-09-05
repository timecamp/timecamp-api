import { default as PouchDB } from 'pouchdb';
import autobind from 'class-autobind';
import * as C from './constants';

import Projects from './Projects';

export default class SyncGateway {
  constructor(apiRequest, syncGatewayUrl) {
    autobind(this);

    this.apiRequest = apiRequest;
    this.syncGatewayUrl = syncGatewayUrl;

    this.projects = new Projects(this);
  }

  async initialize() {
    this.db = await new PouchDB(this.syncGatewayUrl);
    return this;
  }

  async authenticate() {
    return await this.apiRequest.dispatch(
      'post',
      false,
      C.THIS_USER_AUTHORIZE_SYNC_GATEWAY
    );
  }

  normalizeId(id) {
    return id.replace(/-/g, '').replace(/[^a-zA-Z0-9]+/, '_');
  }

}

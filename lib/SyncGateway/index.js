import { default as PouchDB } from 'pouchdb';
import autobind from 'class-autobind';
import * as C from './constants';

export default class SyncGateway {
  constructor(apiRequest, syncGatewayUrl) {
    autobind(this);

    this.apiRequest = apiRequest;
    this.syncGatewayUrl = syncGatewayUrl;

    return this.initialize();
  }

  async initialize() {
    this.db = await new PouchDB('timecamp');
    return this;
  }

  async authenticate() {
    return await this.apiRequest.dispatch(
      'post',
      false,
      C.THIS_USER_AUTHORIZE_SYNC_GATEWAY
    );
  }

  synchronizeProjects(userId, changeCallback, stoppedCallback, errorCallback) {
    // todo validateUserId(userId)
    // todo check is logged in and no timeout on cookie
    // debugger;
    const cancelChanges = this.db.changes({
      since: 0, // or 'now'
      live: true,
      include_docs: true,
      filter: 'sync_gateway/bychannel',
      query_params: {
        channels: [`user-${this.normalizeSyncGatewayId(userId)}-projects`],
      },
    }).on('change', (change) => {
      changeCallback(change);
    }).on('complete', (info) => {
      // changes() was canceled
      stoppedCallback(info);
    }).on('error', (err) => {
      errorCallback(err);
    });

    this.cancelProjectsSynchronization = cancelChanges;

    // const response = this.db.post({
    //   title: 'Ziggy Stardust255',
    //   type: 'project',
    //   channels: [`user-${this.normalizeSyncGatewayId(userId)}-projects`]
    // });
    // console.log(response);
  }


  normalizeSyncGatewayId(id) {
    return id.replace(/-/g, '').replace(/[^a-zA-Z0-9]+/, '_');
  }

}

import { default as PouchDB } from 'pouchdb';
import autobind from 'class-autobind';

export default class Projects {
  constructor(sgw) {
    autobind(this);

    this.sgw = sgw;
  }

  async create({name}) {
    return this.sgw.db.post({
      type: 'project',
      name,
    });
  }

  async read(id) {
    return this.sgw.db.get(id);
  }

  async update(_id, _rev, {name}) {
    return await this.sgw.db.put({
      _id,
      _rev,
      name,
    });
  }

  async delete(_id, _rev) {
    return await this.sgw.db.remove({
      _id,
      _rev,
    });
  }

  synchronize(userId, changeCallback, stoppedCallback, errorCallback) {
    // todo validateUserId(userId)
    // todo check is logged in and no timeout on cookie
    // debugger;
    const cancelChanges = this.sgw.db.changes({
      since: 0, // or 'now'
      live: true,
      include_docs: true,
      filter: 'sync_gateway/bychannel',
      query_params: {
        channels: [`user-${this.normalizeSyncGatewayId(userId)}-projects`],
      },
    }).on('change', (change) => {
      changeCallback(change);
      // yield change;
    }).on('complete', (info) => {
      // changes() was canceled
      stoppedCallback(info);
      // yield info;
    }).on('error', (err) => {
      errorCallback(err);
      // yield err;
    });

    this.cancelProjectsSynchronization = cancelChanges;

    // const response = this.db.post({
    //   title: 'Ziggy Stardust255',
    //   type: 'project',
    //   channels: [`user-${this.normalizeSyncGatewayId(userId)}-projects`]
    // });
    // console.log(response);
  }

}

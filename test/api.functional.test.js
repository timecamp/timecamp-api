import expect from 'expect';

import TimeCampApi from '../lib';

describe('TimeCamp', () => {

  let tca;

  describe('REST API', () => {
    it('exists', () => {
      tca = new TimeCampApi(
        'http://api-dev.timecamp.com/',
        'http://api-dev.timecamp.com:4984/timecamp',
        true);

      expect(true).toEqual(true);
    });

    const username = `${Math.random().toString(36).substring(7)}@${Math.random().toString(36).substring(3)}.com`;
    const password = `666`;

    it('can register a new user', async function () {
      let apiResponse = await tca.register(username, password);
      if (apiResponse.error) {
        throw new Error(apiResponse.error.errorMessage);
      }
    }).timeout(10000);

    describe('user', () => {
      it('can log in', async function () {
        let apiResponse = await tca.authenticate(username, password);
        if (apiResponse.error) {
          throw new Error(apiResponse.error.errorMessage);
        }
        user = apiResponse.data;
      }).timeout(10000);

      let user;
      it('can GET info about self', async function () {
        let apiResponse = await tca.userInfo();
        if (apiResponse.error) {
          throw new Error(apiResponse.error.errorMessage);
        }
        user = apiResponse.data;
      }).timeout(10000);

      it('can GET notifications', async function () {
        let apiResponse = await tca.userNotifications();
        if (apiResponse.error) {
          throw new Error(apiResponse.error.errorMessage);
        }
        user = apiResponse.data;
      }).timeout(10000);

      it('can PATCH /me name', async function () {
        let apiResponse = await tca.updateUserInfo({ name: "Katy Perry" });
        if (apiResponse.error) {
          throw new Error(apiResponse.error.errorMessage);
        }
        user = apiResponse.data;
      }).timeout(10000);


    });
  });

  describe('SyncGateway', () => {

    it('can authenticate', async function () {
      await tca.syncGateway.initialize();
      let apiResponse = await tca.syncGateway.authenticate();
      if (apiResponse.error) {
        throw new Error(apiResponse.error.errorMessage);
      }
    }).timeout(10000);

    let project;
    it('can CREATE a new project', async function () {
      project = { name: 'test' };
      let response = await tca.syncGateway.projects.create(project);
      if (!response.ok) {
        throw response;
      }

      project._id = response.id;
      project._rev = response.rev;

    }).timeout(10000);

    let readProject;
    it('can GET the CREATEd project', async function () {
      readProject = await tca.syncGateway.projects.read(project._id);

      if (readProject.name !== project.name) {
        console.log(project);
        console.log(readProject);
        throw new Error('Projects missmatch');
      }
    }).timeout(10000);

    it('can SYNC project changes', function (done) {
      project = tca.syncGateway.projects.synchronize(user.id, (change) => {
        console.log(change);
        done();
      }, (stopped) => {
        console.log('stopped');
      }, (error) => {
        console.log(error);
        done(error);
      });
    }).timeout(10000);
  })
});

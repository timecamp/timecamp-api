import expect from 'expect';

import TimeCampApi from '../lib';

describe('TimeCampApi', () => {

  let tca;

  describe('API', () => {
    it('exists', () => {
      tca = new TimeCampApi(
        'http://api-dev.timecamp.com/',
        'http://api-dev.timecamp.com:4984/timecamp',
        true)

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
      }).timeout(10000);

      it('can log in to Sync Gateway', async function () {
        await tca.syncGateway.initialize();
        let apiResponse = await tca.syncGateway.authenticate();
        if (apiResponse.error) {
          throw new Error(apiResponse.error.errorMessage);
        }
      }).timeout(10000);

      let project;

      it('can add a new project', async function () {
        project = { name: 'test' };
        let response = await tca.syncGateway.projects.create(project);
        if (!response.ok) {
          throw response;
        }

        project._id = response.id;
        project._rev = response.rev;

      }).timeout(10000);

      let readProject;
      it('can fetch the new project', async function () {
        readProject = await tca.syncGateway.projects.read(project._id);

        if (readProject.name !== project.name) {
          console.log(project);
          console.log(readProject);
          throw new Error('Projects missmatch');
        }
      }).timeout(10000);

      // it('can get synchronize projects', async function () {
      //   // project = await tca.syncGateway.newProject('test');
      // }).timeout(10000);

    });
  });
});

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

    it('can log in the new user', async function () {
      let apiResponse = await tca.authenticate(username, password);
      if (apiResponse.error) {
        throw new Error(apiResponse.error.errorMessage);
      }
    }).timeout(10000);
  });
});

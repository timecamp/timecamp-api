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

    it('can register a new user', async function () {
      let apiResponse = await tca.register(`${Math.random().toString(36).substring(7)}@${Math.random().toString(36).substring(3)}.com`, '666');
      if (apiResponse.error) {
        throw new Error(apiResponse.error.errorMessage);
      }
    }).timeout(10000);
  });
});

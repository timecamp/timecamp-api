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

    it('can register a new user', async (done) => {
      try {
        let apiResponse = await tca.register(Math.random().toString(), '666');
        done();
      } catch (error) {
        done(error);
      }
    }).timeout(10000); 
  });
});

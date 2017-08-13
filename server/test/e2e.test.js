import cheerio from 'cheerio';
import request from 'request-promise';
import errors from 'request-promise/errors';
import createSystem from './test-system';

describe('www.stephen-cresswell.net', () => {

  let system;
  let config;

  beforeAll(cb => {
    system = createSystem().start((err, components) => {
      if (err) return cb(err);
      config = components.config;
      cb();
    });
  });

  afterAll(cb => {
    system.stop(cb);
  });

  it('should respond to status requests', async () => {
    const res = await request({
      url: `http://${config.server.host}:${config.server.port}/__/status`,
      resolveWithFullResponse: true,
      json: true,
    });

    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type'].toLowerCase()).toBe('application/json; charset=utf-8');
    expect(res.body.name).toBe('www-app');
  });

  it('should respond to application requests', async () => {
    const res = await request({
      url: `http://${config.server.host}:${config.server.port}/`,
      resolveWithFullResponse: true,
    });

    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type'].toLowerCase()).toBe('text/html; charset=utf-8');
    const $ = cheerio.load(res.body);
    expect($('title').text()).toBe('Stephen Cresswell');
  });

  it.only('should protect private resources', async () => {
    expect.assertions(2);
    await request({
      url: `http://${config.server.host}:${config.server.port}/__/private`,
      resolveWithFullResponse: true,
      followRedirect: false,
    }).catch(errors.StatusCodeError, (reason) => {
      expect(reason.statusCode).toBe(302);
      expect(reason.response.headers.location).toBe('/auth/fixed');
    });
  });
});

const request = require('supertest');
const { describe, it } = require('@jest/globals'); // eslint-disable-line
const app = require('../../app');

let idResposta;
describe('POST in /groups', () => {
  it('Must add a group', async () => {
    const respostaCreate = await request(app)
      .post('/groups')
      .send({ name: 'Java Script' })
      .expect(201);

    idResposta = respostaCreate.body.id;
  });
});

describe('PUT in groups', () => {
  it('Must get one group', async () => {
    await request(app)
      .put(`/groups/${idResposta}`)
      .send({ name: 'Java Script Avançado' })
      .expect(204);
  });
});

describe('GET in /groups', () => {
  it('Must get one group', async () => {
    const responseGetGroup = await request(app)
      .get(`/groups/${idResposta}`)
      .expect(200);
    expect(responseGetGroup.body.name).toEqual('Java Script Avançado'); // eslint-disable-line
  });
});

describe('GET in /groups', () => {
  it('Must return one list Groups', async () => {
    await request(app)
      .get('/groups')
      .expect(200);
  });
});

describe('DELETE in /groups', () => {
  it('Must destroy one group', async () => {
    await request(app)
      .get(`/groups/${idResposta}`)
      .expect(200);
  });
});

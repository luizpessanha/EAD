const request = require('supertest');
const { describe, it } = require('@jest/globals'); // eslint-disable-line
const app = require('../../app');

let idTrail;

describe('GET in trails', () => {
  it('MUST add list trails', async () => {
    await request(app)
      .get('/trails')
      .expect(200);
  });
});

describe('POST in trails', () => {
  it('Must add one trail', async () => {
    const resposta = await request(app)
      .post('/trails')
      .send({
        name: 'Especialista SQL',
        active: true,
      })
      .expect(201);

    idTrail = resposta.body.id;
  });

  it('Must not accept empty form', async () => {
    await request(app)
      .post('/trails')
      .send({})
      .expect(400);
  });
});

describe('GET in trails', () => {
  it('Must get one trail', async () => {
    const repostaOneTrail = await request(app)
      .get(`/trails/${idTrail}`)
      .expect(200);
    expect(repostaOneTrail.body.name).toEqual('Especialista SQL'); // eslint-disable-line
  });
});

describe('PUT in trails', () => {
  it.each([
    ['name', { name: 'xandoca' }],
    ['active', { active: true }],
  ])('Must updade trail', async (key, params) => {
    await request(app)
      .put(`/trails/${idTrail}`)
      .send(params)
      .expect(204);
  });
});

describe('DELETE in trails', () => {
  it('Must destroy one trail', async () => {
    await request(app)
      .delete(`/trails/${idTrail}`)
      .expect(200);
  });
});

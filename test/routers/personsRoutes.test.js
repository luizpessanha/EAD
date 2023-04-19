const request = require('supertest');
const { describe, it } = require('@jest/globals'); // eslint-disable-line
const app = require('../../app');

let server;
beforeEach(() => { // eslint-disable-line
  const port = 3008;
  server = app.listen(port);//
});

afterEach(() => { // eslint-disable-line
  server.close();
});

describe('GET em /persons', () => {
  it('Deve retornar uma lista de persons', async () => {
    const resposta = await request(app)
      .get('/persons')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);

    expect(resposta.body[0].name).toEqual('Ana Souza'); // eslint-disable-line
  });
});

let idResposta;
describe('POST em /persons', () => {
  it('Deve adicionar um Person', async () => {
    const respostaCreate = await request(app)
      .post('/persons')
      .send({
        name: 'Sergio Lopes',
        active: true,
        role: 'docente',
        email: 'sergio@sergio.com',
      })
      .expect(201);

    idResposta = respostaCreate.body.id;
  });

  it('Deve não aceitar nada ao passar o body vazio', async () => {
    await request(app)
      .post('/persons')
      .send({})
      .expect(400);
  });
});

describe('PUT em /persons/:id', () => {
  it.each([
    ['name', { name: 'Luiz Pessanha' }],
    ['active', { active: false }],
    ['role', { role: 'aluno' }],
    ['email', { role: 'luiz@luiz.com' }],
  ])('Deve alterar o campo %s', async (chave, params) => {
    await request(app)
      .put(`/persons/${idResposta}`)
      .send(params)
      .expect(204);
  });
});

describe('GET One Person', () => {
  it(`Deve retornar o person Com o Nome Luiz Pessanha ${idResposta}`, async () => {
    const respostaFindUnoPerson = await request(app)
      .get(`/persons/${idResposta}`)
      .expect(200);
    expect(respostaFindUnoPerson.body.name).toEqual('Luiz Pessanha'); // eslint-disable-line
  });
});

describe('DELETE em /persons/:id', () => {
  it('Deve deletar o person criado', async () => {
    await request(app)
      .delete(`/persons/${idResposta}`)
      .expect(200);
  });
});

import request from 'supertest';
import { describe, expect, test, beforeAll, afterAll, beforeEach } from '@jest/globals';
import sequelize from '../../src/libs/sequelize';
import { upSeed, downSeed } from './utils/umzug';

import createApp from '../../src/app';

let app;
let api;
let server;
let commentElement;

beforeAll(async () => {
  app = createApp();

  server = app.listen(9000);
  api = request(app);
  await upSeed();

  const { body: commentsList } = await api.get('/api/comments/');
  [ commentElement ] = commentsList;

});

beforeEach(async () => {
  await upSeed();
})

afterAll(async () => {
  await downSeed();
  server.close();
});

describe('get /comments', () => {
  test('should return a comments list', async() => {
    const { statusCode, body } = await api.get('/api/comments/');
    expect(statusCode).toBe(200);
    expect(Array.isArray(body)).toBe(true);
  });

  test('should response with 404 if no comments', async() => {
    await api.delete(`/api/comments/${commentElement.id}`);
    const { statusCode } = await api.get('/api/comments/');
    expect(statusCode).toBe(404);
  });
});

describe('get /comments/{id}', () => {
  test('should return a comment', async() => {
    const commentDb = await sequelize.models.Comment.findByPk(commentElement.id);
    const { statusCode, body } = await api.get(`/api/comments/${commentElement.id}`);
    expect(statusCode).toBe(200);
    expect(body.mail).toBe(commentDb.mail);
  });

  test('should response with 404 if no comment', async() => {
    await api.delete(`/api/comments/${commentElement.id}`);
    const { statusCode } = await api.get('/api/comments/');
    expect(statusCode).toBe(404);
  });
});

describe('post /comments', () => {
  const newCommentData = {
    mail: 'irae45@gmail.com',
    message: 'Hello World',
  };
  test('should return a new comment', async () => {
    const { statusCode, body } = await api.post('/api/comments/')
      .send(newCommentData);
    const commentdb = await sequelize.models.Comment.findByPk(body.id);
    expect(statusCode).toBe(201);
    expect(commentdb.mail).toBe(body.mail);
  });
});

describe('patch /comments/{id}', () => {
  const updateData = {
    mail: 'contact@ivanrobles.pro',
  };

  test('should return an updated comment', async() => {
    const { statusCode, body } = await api.patch(`/api/comments/${commentElement.id}`)
      .send(updateData);
    const commentDb = await sequelize.models.Comment.findByPk(commentElement.id);
    expect(statusCode).toBe(200);
    expect(body.mail).toBe(commentDb.mail);
  });
});

describe('delete /comments/{id}', () => {
  test('should return 204 no content', async () => {
    const { statusCode } = await api.delete(`/api/comments/${commentElement.id}`);
    expect(statusCode).toBe(204);
  });
});

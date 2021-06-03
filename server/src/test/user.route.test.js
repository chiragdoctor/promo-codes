const express = require('express');
const chai = require('chai');
const { expect } = require('chai');

const app = require('../server');
const request = require('supertest').agent(app.listen());

describe('User Route', () => {
  let token = '';
  it('should login  user', async () => {
    const res = await request
      .post('/api/v1/users/login')
      .send({ email: 'chirag@email.com', password: 'chirag' });
    expect(res.status).to.be.eql(200);
    expect(res.body.username).to.be.eql('chiragdoc');
    token = res.body.token;
    expect(res.body.token).not.to.be.null;
  });

  it('should get 401 is token is not passed', async () => {
    const res = await request.get('/api/v1/users');
    expect(res.status).to.be.eql(401);
    expect(JSON.parse(res.text).message).to.be.eql(
      'Access denied. No credentials sent!',
    );
  });

  it('should create a user', async () => {
    const randomUserNumber = Math.floor(Math.random() * 10000 + 1);
    const res = await request
      .set('Authorization', 'Bearer ' + token)
      .post('/api/v1/users')
      .send({
        email: `test${randomUserNumber}@email.com`,
        username: `test-user-${randomUserNumber}`,
        first_name: `test-user-first-${randomUserNumber}`,
        last_name: `test-user-last-${randomUserNumber}`,
        password: 'test123',
        confirm_password: 'test123',
      });
    expect(res.status).to.be.eql(201);
  });

  it('should get all users', async () => {
    const res = await request
      .set('Authorization', 'Bearer ' + token)
      .get('/api/v1/users');
    expect(res.status).to.be.eql(200);
    expect(Array.isArray(res.body)).to.be.eql(true);
    expect(res.body.length).to.be.greaterThan(0);
  });

  it('should get a user', async () => {
    const res = await request
      .set('Authorization', 'Bearer ' + token)
      .get('/api/v1/users/id/1');
    expect(res.status).to.be.eql(200);
    expect(res.body.username).to.be.eql('chiragdoc');
  });
});

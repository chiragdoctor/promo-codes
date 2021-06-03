const express = require('express');
const chai = require('chai');
const { expect } = require('chai');

const app = require('../server');
const request = require('supertest').agent(app.listen());

describe('Active Bonus Route', () => {
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

  it('should get bonus list for user', async () => {
    const res = await request
      .set('Authorization', 'Bearer ' + token)
      .get('/api/v1/activateBonus/id/1');
    expect(res.status).to.be.eql(200);
    expect(Array.isArray(res.body)).to.be.eql(true);
    expect(res.body.length).to.be.greaterThan(0);
  });

  it('should empty array if there is no bonus activated for user', async () => {
    const res = await request
      .set('Authorization', 'Bearer ' + token)
      .get('/api/v1/activateBonus/id/3');
    expect(res.status).to.be.eql(200);
    expect(Array.isArray(res.body)).to.be.eql(true);
    expect(res.body.length).to.be.eql(0);
  });

  it('should add bonus for user', async () => {
    const randomUserNumber = Math.floor(Math.random() * 10000 + 1);
    const res = await request
      .set('Authorization', 'Bearer ' + token)
      .post('/api/v1/activateBonus')
      .send({
        userId: 5,
        serviceId: 1,
      });
    expect(res.status).to.be.eql(201);
  });
});

const express = require('express');
const chai = require('chai');
const { expect } = require('chai');

const app = require('../server');
const request = require('supertest').agent(app.listen());

describe('Services Route', () => {
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

  it('should get all services', async () => {
    const res = await request
      .set('Authorization', 'Bearer ' + token)
      .get('/api/v1/services');
    expect(res.status).to.be.eql(200);
    expect(Array.isArray(res.body)).to.be.eql(true);
    expect(res.body.length).to.be.greaterThan(0);
  });

  it('should get services list by name', async () => {
    const res = await request
      .set('Authorization', 'Bearer ' + token)
      .get('/api/v1/services/by-name?serviceName=mic');
    expect(res.status).to.be.eql(200);
    expect(Array.isArray(res.body)).to.be.eql(true);
    expect(res.body.length).to.be.eql(1);
  });
});

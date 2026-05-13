import test from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import app from '../server';

test('GET / returns app shell', async () => {
  const res = await request(app).get('/');
  assert.equal(res.status, 200);
  assert.match(res.text, /<div id="root"><\/div>/i);
});

test('GET /resume resolves via SPA fallback', async () => {
  const res = await request(app).get('/resume');
  assert.equal(res.status, 200);
  assert.match(res.text, /<div id="root"><\/div>/i);
});

test('GET /privacy resolves via SPA fallback', async () => {
  const res = await request(app).get('/privacy');
  assert.equal(res.status, 200);
  assert.match(res.text, /<div id="root"><\/div>/i);
});

test('GET /robots.txt serves robots rules', async () => {
  const res = await request(app).get('/robots.txt');
  assert.equal(res.status, 200);
  assert.match(res.text, /User-agent:\s*\*/i);
  assert.match(res.text, /Sitemap:/i);
});

test('GET /sitemap.xml serves sitemap', async () => {
  const res = await request(app).get('/sitemap.xml');
  assert.equal(res.status, 200);
  assert.match(res.text, /<urlset/i);
  assert.match(res.text, /https:\/\/milhound\.com\/privacy/i);
});

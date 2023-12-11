import mysql from 'mysql2';
import express from 'express';

import config from './config.js';

const app = express();

const pool = mysql.createPool(config.connections.MySQL);

const pool2 = mysql.createPool(config.connections.MySQL);

pool.on('error', (error) => {
  console.error(error);
});

  
const server = app.listen(3000, () => {
    console.log('Server listening on port 3000');
    pool.query('SELECT 1')
    pool.query('SELECT 1')
    pool.query('SELECT 1')
    pool.query('SELECT 1')
    pool.query('SELECT 1')
    pool.query('SELECT 1')
    pool2.query('SELECT 1')
    pool2.query('SELECT 1')
    pool2.query('SELECT 1')
    pool2.query('SELECT 1')
    pool2.query('SELECT 1')
    pool2.query('SELECT 1')
});

pool.on('connection', connection => {
    console.log('CONNECTED TO DB')
  setInterval(() => connection.ping(), 5000);
});


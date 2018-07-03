//
//
// File name : psql-adapter.js
// Author: Jerry Hsieh @ 2018-07-01
// Copyright © 2018, Jerry Hsieh, all rights reserved.
// 
// 

import pgPromise from 'pg-promise';

const connectStr = {
  host: 'localhost',
  port: 5432,
  database: 'nodetest',
  user: 'xxxxx',
  password: 'yyyyy'
};

const pgp = pgPromise({});
const psql = pgp(connectStr);


export default psql;

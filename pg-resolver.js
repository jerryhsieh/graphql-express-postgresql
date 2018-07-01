//
//
// File name : pg-resolver.js
// Author: Jerry Hsieh @ 2018-07-01
// Copyright © 2018, Jerry Hsieh, all rights reserved.
// 
// 

import psql from './psql-adapter';

const resolvers = {
  Query: {
    users: () => {
      const userQuery = 'select id, username, email from users';
      return psql.manyOrNone(userQuery);
    }
  }
}

export default resolvers;

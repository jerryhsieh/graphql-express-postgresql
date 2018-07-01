//
//
// File name : pg-schema.js
// Author: Jerry Hsieh @ 2018-07-01
// Copyright © 2018, Jerry Hsieh, all rights reserved.
// 
// 

import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './pg-resolver';

const typeDefs = [`
   type User {
      id: String
      username: String
      email: String
   }
   type Query {
      users: [User]
   }
`];

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;

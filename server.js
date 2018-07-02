
import express from 'express';
import bodyParse from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import cors from 'cors';

//import schema from './schema';
import schema from './pg-schema';

const app = express();

app.use('*', cors());

app.use('/graphiql', graphiqlExpress({
  endpointURL: "/graphql"
}));

app.use('/graphql', bodyParse.json(), graphqlExpress({ schema }));

app.listen(4000, () => console.log("express server running on port 4000 "));

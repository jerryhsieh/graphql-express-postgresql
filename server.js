
import express from 'express';
import bodyParse from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import schema from './schema';

const app = express();

app.use('/graphiql', graphiqlExpress({
    endpointURL:  "/graphql"
}));

app.use('/graphql', bodyParse.json(), graphqlExpress({schema}));

app.listen(4000, () => console.log("express server running on port 4000 "));
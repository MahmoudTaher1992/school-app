import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema/schema";

export const expressGraphQLMiddleware = graphqlHTTP({
  graphiql: true,
  schema: schema,
});

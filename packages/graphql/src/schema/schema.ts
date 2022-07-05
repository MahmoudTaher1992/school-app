import { makeExecutableSchema } from "@graphql-tools/schema";
import * as school from "./school";

export const schema = makeExecutableSchema({
  typeDefs: [school.schema],
  resolvers: [school.resolvers],
});

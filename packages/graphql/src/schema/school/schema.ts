import { buildSchema } from "graphql";

export const schema = `
  type School {
    id: Int!
    name: String!
    address: String
  }
  
  type Query {
    schools: [School]
  }
  
  type Mutation {
    createSchool(data: CreateSchoolPayload!): School
  }
  
  input CreateSchoolPayload {
    name: String!,
    address: String,
  }
`;

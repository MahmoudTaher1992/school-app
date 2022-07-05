import { schools } from "@school-app/shared";
import { Resolvers } from "../../generated/graphql";

export const resolvers: Resolvers = {
  Query: {
    schools: async (root, args, ctx) => {
      console.log(`resolvers > Query > schools > args`, args);
      return schools;
    },
  },
  Mutation: {
    createSchool: async (root, args, ctx) => {
      const newSchool = {
        id: Math.max(...schools.map((s) => s.id)) + 1,
        name: args.data.name,
        address: args.data.address || undefined,
      };
      schools.push(newSchool);
      return newSchool;
    },
  },
};

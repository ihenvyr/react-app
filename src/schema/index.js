import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

import User from '../models/User';
import UserType from './types/user';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    hello: {
      type: GraphQLString,
        description: 'The simple hello world sample field',
        resolve: () => 'world'
    },
    user: {
      type: UserType,
        args: {
        email: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (object, args, context) => User.findOne({ email: args.email })
    },
    users: {
      type: new GraphQLList(UserType),
      resolve: (object, args, context) => User.find({})
    }
  })
});

const appSchema = new GraphQLSchema({
  query: RootQueryType,
  // mutation: {}
});


export default appSchema;

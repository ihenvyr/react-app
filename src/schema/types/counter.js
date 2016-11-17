import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

const CounterType = new GraphQLObjectType({
  name: 'CounterType',
  description: '...',
  fields: () => {
    const UserType = require('./user').default;

    return {
      id: { type: GraphQLID },
      count: { type: GraphQLInt },
      description: { type: GraphQLString },
      user: {
        type: UserType,
        resolve: (counter, args, context) => context.loaders.getUsersByIds.load(counter.user_id)
      },
      updated_at: { type: GraphQLString },
      created_at: { type: GraphQLString },
    };
  },
});

export default CounterType;

import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: '...',
  fields: () => {
    const ProductType = require('./productType').default;
    const CounterType = require('./counterType').default;

    return {
      id: { type: GraphQLID },
      email: { type: GraphQLString },
      first_name: { type: GraphQLString },
      last_name: { type: GraphQLString },
      contact_number: { type: GraphQLString },
      facebook: { type: GraphQLString },
      address: { type: GraphQLString },
      role: { type: GraphQLString },
      password: { type: GraphQLString },
      products: { type: new GraphQLList(ProductType) },
      counters: { type: new GraphQLList(CounterType) },
      created_at: { type: GraphQLString },
      updated_at: { type: GraphQLString },
      createdAt: { type: GraphQLString, resolve: user => user.created_at },
      updatedAt: { type: GraphQLString, resolve: user => user.updated_at },
    };
  },
});

export default UserType;

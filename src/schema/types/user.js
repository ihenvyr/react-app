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
    const ProductType = require('./product').default;

    return {
      id: { type: GraphQLID },
      email: { type: GraphQLString },
      password: { type: GraphQLString },
      products: { type: new GraphQLList(ProductType) },
      created_at: { type: GraphQLString },
      updated_at: { type: GraphQLString },
      createdAt: { type: GraphQLString, resolve: user => user.created_at },
      updatedAt: { type: GraphQLString, resolve: user => user.updated_at },
    };
  },
});

export default UserType;

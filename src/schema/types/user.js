import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLString },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    createdAt: { type: GraphQLString, resolve: object => object.created_at },
    updatedAt: { type: GraphQLString, resolve: object => object.updated_at },
  }),
});

export default UserType;

import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

import { getBrands, getUsers, getProducts } from '../database/mongodb';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => {
    const BrandType = require('./types/brand').default;
    const UserType = require('./types/user').default;
    const ProductType = require('./types/product').default;

    return {
      brand: {
        type: BrandType,
        args: {
          id: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: (object, args, context) => context.loaders.getBrandsByIds.load([args.id])
      },
      brands: {
        type: new GraphQLList(BrandType),
        resolve: (object, args, context) => getBrands()
      },
      user: {
        type: UserType,
        args: {
          id: { type: GraphQLString },
          email: { type: GraphQLString },
        },
        resolve: (object, args, context) => {
          if (args.id) {
            return context.loaders.getUsersByIds.load(args.id);
          }

          return context.loaders.getUsersByEmails.load(args.email);
        }
      },
      users: {
        type: new GraphQLList(UserType),
        resolve: (object, args, context) => getUsers()
      },
      product: {
        type: ProductType,
        args: {
          id: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: (object, args, context) => context.loaders.getProductsByIds.load([args.id])
      },
      products: {
        type: new GraphQLList(ProductType),
        resolve: (object, args, context) => getProducts()
      }
    };
  }
});

const appSchema = new GraphQLSchema({
  query: RootQueryType,
  // mutation: {}
});


export default appSchema;

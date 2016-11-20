import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

// database specific methods on getting/updating the data
// this time it's from mongodb
import { getBrands, getUsers, getProducts, getCounters } from '../database/mongodb';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => {
    const BrandType = require('./types/brandType').default;
    const UserType = require('./types/userType').default;
    const ProductType = require('./types/productType').default;
    const CounterType = require('./types/counterType').default;

    return {
      brand: {
        type: BrandType,
        args: {
          id: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: (object, args, context) => context.loaders.getBrandsByIds.load(args.id)
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
        resolve: (object, args, context) => context.loaders.getProductsByIds.load(args.id)
      },
      products: {
        type: new GraphQLList(ProductType),
        resolve: (object, args, context) => getProducts()
      },
      counter: {
        type: CounterType,
        args: {
          id: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: (object, args, context) => context.loaders.getCountersByIds.load(args.id)
      },
      counters: {
        type: new GraphQLList(CounterType),
        resolve: (object, args, context) => getCounters()
      },
    };
  }
});

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: () => {
    const counterCountReset = require('./mutations/counter/countResetMutation').default;
    const counterCountIncrement = require('./mutations/counter/countIncrementMutation').default;
    const counterCountDecrement = require('./mutations/counter/countDecrementMutation').default;

    return {
      counterCountReset,
      counterCountIncrement,
      counterCountDecrement,
    };
  }
});

const appSchema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});


export default appSchema;

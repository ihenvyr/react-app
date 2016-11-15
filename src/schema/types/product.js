import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

const ProductType = new GraphQLObjectType({
  name: 'ProductType',
  description: '...',
  fields: () => {
    const UserType = require('./user').default;
    const BrandType = require('./brand').default;

    return {
      id: { type: GraphQLID },
      name: { type:GraphQLString },
      description: { type: GraphQLString },
      user: {
        type: UserType,
        resolve: (product, args, context) => context.loaders.getUsersByIds.load(product.user_id)
      },
      brand: {
        type: BrandType,
        resolve: (product, args, context) => context.loaders.getBrandsByIds.load(product.brand_id),
      },
      cost: { type: new GraphQLList(GraphQLInt) },
      price: { type: new GraphQLList(GraphQLInt) },
      quantity: { type: GraphQLInt },
      images: { type: new GraphQLList(GraphQLString) },
      variants: { type: new GraphQLList(
        new GraphQLObjectType({
          name: 'VariantType',
          description: '...',
          fields: {
            position: { type: GraphQLInt },
            name: { type: GraphQLString },
            cost: { type: GraphQLInt },
            price: { type: GraphQLInt },
            quantity: { type: GraphQLInt },
            images: { type: new GraphQLList(GraphQLString) },
          },
        })
      ) },
      updated_at: { type: GraphQLString },
      created_at: { type: GraphQLString },
    };
  },
});

export default ProductType;

import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

const BrandType = new GraphQLObjectType({
  name: 'BrandType',
  description: '...',
  fields: () => {
    const ProductType = require('./productType').default;

    return {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      images: { type: new GraphQLList(GraphQLString) },
      products: { type: new GraphQLList(ProductType) },
      updated_at: { type: GraphQLString },
      created_at: { type: GraphQLString },
    };
  },
});

export default BrandType;

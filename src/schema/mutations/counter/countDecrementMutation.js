import {
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';
import CounterType from '../../types/counterType';
import { counterCountDecrement } from '../../../database/mongodb';

export default {
  type: CounterType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve: (object, args, context) => counterCountDecrement(args.id),
};

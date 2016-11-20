import {
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';
import CounterType from '../types/counterType';
import { counterCountIncrement } from '../../database/mongodb';

export default {
  type: CounterType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve: (object, args, context) => counterCountIncrement(args.id),
};

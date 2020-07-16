import { IResolvers } from 'graphql-tools';
import type from './type';
import query from './query';
import mutation from './mutation';


const IResolversMap : IResolvers = {
    ...type,
    ...query,
    ...mutation,
}

export default IResolversMap;
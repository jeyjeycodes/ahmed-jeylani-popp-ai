import { GraphQLClient } from 'graphql-request';
import { environmentVariables } from '@/config';

export const graphqlClient = new GraphQLClient(environmentVariables.VITE_GRAPHQL_ENDPOINT, {
  headers: {
    'x-api-key': environmentVariables.VITE_API_KEY,
  },
});

import { loadEnv } from 'vite';
import { CodegenConfig } from '@graphql-codegen/cli';

const { VITE_GRAPHQL_ENDPOINT, VITE_API_KEY } = loadEnv('', process.cwd());

const config: CodegenConfig = {
  schema: [
    {
      [VITE_GRAPHQL_ENDPOINT]: {
        headers: {
          'x-api-key': VITE_API_KEY,
        },
      },
    },
  ],
  documents: ['./src/graphql/**/*.graphql'],
  generates: {
    './src/graphql/generated/index.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
        {
          add: {
            content: '// @ts-nocheck',
          },
        },
      ],
      config: {
        fetcher: 'graphql-request',
        reactQueryVersion: 5,
        legacyMode: false, // Set to true if you are using react-query@3
      },
    },
  },
  hooks: {
    afterOneFileWrite: 'prettier --write',
  },
};

export default config;

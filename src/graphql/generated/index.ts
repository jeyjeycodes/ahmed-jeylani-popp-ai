// @ts-nocheck
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables extends { [key: string]: any }>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  requestHeaders?: RequestInit['headers'],
) {
  return async (): Promise<TData> =>
    client.request({
      document: query,
      variables,
      requestHeaders,
    });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  AWSDateTime: { input: any; output: any };
};

export type Candidate = {
  __typename?: 'Candidate';
  createdAt: Scalars['AWSDateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  score: Scalars['Float']['output'];
  status: CandidateStatus;
  updatedAt: Scalars['AWSDateTime']['output'];
};

export enum CandidateStatus {
  Applied = 'APPLIED',
  Rejected = 'REJECTED',
  Shortlisted = 'SHORTLISTED',
}

export type CreateCandidateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  lastName: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  score: Scalars['Float']['input'];
  status: CandidateStatus;
};

export type DeleteCandidateInput = {
  id: Scalars['ID']['input'];
};

export enum ModelAttributeTypes {
  Null = '_null',
  Binary = 'binary',
  BinarySet = 'binarySet',
  Bool = 'bool',
  List = 'list',
  Map = 'map',
  Number = 'number',
  NumberSet = 'numberSet',
  String = 'string',
  StringSet = 'stringSet',
}

export type ModelBooleanInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ModelCandidateConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelCandidateConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  firstName?: InputMaybe<ModelStringInput>;
  lastName?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelCandidateConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelCandidateConditionInput>>>;
  phoneNumber?: InputMaybe<ModelStringInput>;
  score?: InputMaybe<ModelFloatInput>;
  status?: InputMaybe<ModelCandidateStatusInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelCandidateConnection = {
  __typename?: 'ModelCandidateConnection';
  items: Array<Maybe<Candidate>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelCandidateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelCandidateFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  firstName?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  lastName?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelCandidateFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelCandidateFilterInput>>>;
  phoneNumber?: InputMaybe<ModelStringInput>;
  score?: InputMaybe<ModelFloatInput>;
  status?: InputMaybe<ModelCandidateStatusInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelCandidateStatusInput = {
  eq?: InputMaybe<CandidateStatus>;
  ne?: InputMaybe<CandidateStatus>;
};

export type ModelFloatInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  ge?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  le?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
};

export type ModelIdInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['ID']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  ge?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  le?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelIntInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
};

export type ModelSizeInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type ModelStringInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['String']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelSubscriptionBooleanInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ModelSubscriptionFloatInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  ge?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  le?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type ModelSubscriptionIdInput = {
  beginsWith?: InputMaybe<Scalars['ID']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  ge?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  le?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ModelSubscriptionIntInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ModelSubscriptionStringInput = {
  beginsWith?: InputMaybe<Scalars['String']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCandidate?: Maybe<Candidate>;
  deleteCandidate?: Maybe<Candidate>;
  updateCandidate?: Maybe<Candidate>;
};

export type MutationCreateCandidateArgs = {
  condition?: InputMaybe<ModelCandidateConditionInput>;
  input: CreateCandidateInput;
};

export type MutationDeleteCandidateArgs = {
  condition?: InputMaybe<ModelCandidateConditionInput>;
  input: DeleteCandidateInput;
};

export type MutationUpdateCandidateArgs = {
  condition?: InputMaybe<ModelCandidateConditionInput>;
  input: UpdateCandidateInput;
};

export type Query = {
  __typename?: 'Query';
  getCandidate?: Maybe<Candidate>;
  listCandidates?: Maybe<ModelCandidateConnection>;
};

export type QueryGetCandidateArgs = {
  id: Scalars['ID']['input'];
};

export type QueryListCandidatesArgs = {
  filter?: InputMaybe<ModelCandidateFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCandidateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<CandidateStatus>;
};

export type ListCandidatesQueryVariables = Exact<{
  filter?: InputMaybe<ModelCandidateFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
}>;

export type ListCandidatesQuery = {
  __typename?: 'Query';
  listCandidates?: {
    __typename?: 'ModelCandidateConnection';
    items: Array<{
      __typename?: 'Candidate';
      id: string;
      email?: string | null;
      firstName: string;
      lastName: string;
      phoneNumber?: string | null;
      score: number;
      status: CandidateStatus;
      updatedAt: any;
    } | null>;
  } | null;
};

export const ListCandidatesDocument = `
    query ListCandidates($filter: ModelCandidateFilterInput, $limit: Int, $nextToken: String) {
  listCandidates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      firstName
      lastName
      phoneNumber
      score
      status
      updatedAt
    }
  }
}
    `;

export const useListCandidatesQuery = <TData = ListCandidatesQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: ListCandidatesQueryVariables,
  options?: Omit<UseQueryOptions<ListCandidatesQuery, TError, TData>, 'queryKey'> & {
    queryKey?: UseQueryOptions<ListCandidatesQuery, TError, TData>['queryKey'];
  },
  headers?: RequestInit['headers'],
) => {
  return useQuery<ListCandidatesQuery, TError, TData>({
    queryKey: variables === undefined ? ['ListCandidates'] : ['ListCandidates', variables],
    queryFn: fetcher<ListCandidatesQuery, ListCandidatesQueryVariables>(
      client,
      ListCandidatesDocument,
      variables,
      headers,
    ),
    ...options,
  });
};

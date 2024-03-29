//@ts-nocheck
  // DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
  export function gql(strings: TemplateStringsArray, ...args: string[]): string {
    let str = ''
    strings.forEach((string, i) => {
      str += string + (args[i] || '')
    })
    return str
  }
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** References another document, used as a foreign key */
  Reference: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  breadcrumbs: Array<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  relativePath: Scalars['String']['output'];
  extension: Scalars['String']['output'];
  template: Scalars['String']['output'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Folder = {
  __typename?: 'Folder';
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
  endCursor: Scalars['String']['output'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type Document = {
  id: Scalars['ID']['output'];
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON']['output'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float']['output'];
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']['output']>;
  collection: Collection;
  collections: Array<Collection>;
  node: Node;
  document: DocumentNode;
  story: Story;
  storyConnection: StoryConnection;
  post: Post;
  postConnection: PostConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String']['input'];
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStoryArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStoryConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StoryFilter>;
};


export type QueryPostArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PostFilter>;
};

export type DocumentFilter = {
  story?: InputMaybe<StoryFilter>;
  post?: InputMaybe<PostFilter>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  format?: Maybe<Scalars['String']['output']>;
  matches?: Maybe<Scalars['String']['output']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DocumentFilter>;
  folder?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentNode = Story | Post | Folder;

export type Story = Node & Document & {
  __typename?: 'Story';
  title: Scalars['String']['output'];
  series?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  series_order?: Maybe<Scalars['Float']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  author?: Maybe<Scalars['String']['output']>;
  draft?: Maybe<Scalars['Boolean']['output']>;
  body?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type StringFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NumberFilter = {
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RichTextFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StoryFilter = {
  title?: InputMaybe<StringFilter>;
  series?: InputMaybe<StringFilter>;
  series_order?: InputMaybe<NumberFilter>;
  tags?: InputMaybe<StringFilter>;
  author?: InputMaybe<StringFilter>;
  draft?: InputMaybe<BooleanFilter>;
  body?: InputMaybe<RichTextFilter>;
};

export type StoryConnectionEdges = {
  __typename?: 'StoryConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Story>;
};

export type StoryConnection = Connection & {
  __typename?: 'StoryConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<StoryConnectionEdges>>>;
};

export type Post = Node & Document & {
  __typename?: 'Post';
  title: Scalars['String']['output'];
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  author?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  showDate?: Maybe<Scalars['Boolean']['output']>;
  dateUpdated?: Maybe<Scalars['String']['output']>;
  showDateUpdated?: Maybe<Scalars['Boolean']['output']>;
  draft?: Maybe<Scalars['Boolean']['output']>;
  body?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type DatetimeFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostFilter = {
  title?: InputMaybe<StringFilter>;
  tags?: InputMaybe<StringFilter>;
  categories?: InputMaybe<StringFilter>;
  author?: InputMaybe<StringFilter>;
  date?: InputMaybe<DatetimeFilter>;
  showDate?: InputMaybe<BooleanFilter>;
  dateUpdated?: InputMaybe<DatetimeFilter>;
  showDateUpdated?: InputMaybe<BooleanFilter>;
  draft?: InputMaybe<BooleanFilter>;
  body?: InputMaybe<RichTextFilter>;
};

export type PostConnectionEdges = {
  __typename?: 'PostConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Post>;
};

export type PostConnection = Connection & {
  __typename?: 'PostConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<PostConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  updateStory: Story;
  createStory: Story;
  updatePost: Post;
  createPost: Post;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String']['input'];
  relativePath: Scalars['String']['input'];
  template?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
  params: DocumentUpdateMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
  params: DocumentMutation;
};


export type MutationUpdateStoryArgs = {
  relativePath: Scalars['String']['input'];
  params: StoryMutation;
};


export type MutationCreateStoryArgs = {
  relativePath: Scalars['String']['input'];
  params: StoryMutation;
};


export type MutationUpdatePostArgs = {
  relativePath: Scalars['String']['input'];
  params: PostMutation;
};


export type MutationCreatePostArgs = {
  relativePath: Scalars['String']['input'];
  params: PostMutation;
};

export type DocumentUpdateMutation = {
  story?: InputMaybe<StoryMutation>;
  post?: InputMaybe<PostMutation>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentMutation = {
  story?: InputMaybe<StoryMutation>;
  post?: InputMaybe<PostMutation>;
};

export type StoryMutation = {
  title?: InputMaybe<Scalars['String']['input']>;
  series?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  series_order?: InputMaybe<Scalars['Float']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author?: InputMaybe<Scalars['String']['input']>;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['JSON']['input']>;
};

export type PostMutation = {
  title?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  showDate?: InputMaybe<Scalars['Boolean']['input']>;
  dateUpdated?: InputMaybe<Scalars['String']['input']>;
  showDateUpdated?: InputMaybe<Scalars['Boolean']['input']>;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  body?: InputMaybe<Scalars['JSON']['input']>;
};

export type StoryPartsFragment = { __typename: 'Story', title: string, series?: Array<string | null> | null, series_order?: number | null, tags?: Array<string | null> | null, author?: string | null, draft?: boolean | null, body?: any | null };

export type PostPartsFragment = { __typename: 'Post', title: string, tags?: Array<string | null> | null, categories?: Array<string | null> | null, author?: string | null, date?: string | null, showDate?: boolean | null, dateUpdated?: string | null, showDateUpdated?: boolean | null, draft?: boolean | null, body?: any | null };

export type StoryQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type StoryQuery = { __typename?: 'Query', story: { __typename: 'Story', id: string, title: string, series?: Array<string | null> | null, series_order?: number | null, tags?: Array<string | null> | null, author?: string | null, draft?: boolean | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type StoryConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<StoryFilter>;
}>;


export type StoryConnectionQuery = { __typename?: 'Query', storyConnection: { __typename?: 'StoryConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'StoryConnectionEdges', cursor: string, node?: { __typename: 'Story', id: string, title: string, series?: Array<string | null> | null, series_order?: number | null, tags?: Array<string | null> | null, author?: string | null, draft?: boolean | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type PostQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type PostQuery = { __typename?: 'Query', post: { __typename: 'Post', id: string, title: string, tags?: Array<string | null> | null, categories?: Array<string | null> | null, author?: string | null, date?: string | null, showDate?: boolean | null, dateUpdated?: string | null, showDateUpdated?: boolean | null, draft?: boolean | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type PostConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PostFilter>;
}>;


export type PostConnectionQuery = { __typename?: 'Query', postConnection: { __typename?: 'PostConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'PostConnectionEdges', cursor: string, node?: { __typename: 'Post', id: string, title: string, tags?: Array<string | null> | null, categories?: Array<string | null> | null, author?: string | null, date?: string | null, showDate?: boolean | null, dateUpdated?: string | null, showDateUpdated?: boolean | null, draft?: boolean | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export const StoryPartsFragmentDoc = gql`
    fragment StoryParts on Story {
  __typename
  title
  series
  series_order
  tags
  author
  draft
  body
}
    `;
export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  __typename
  title
  tags
  categories
  author
  date
  showDate
  dateUpdated
  showDateUpdated
  draft
  body
}
    `;
export const StoryDocument = gql`
    query story($relativePath: String!) {
  story(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...StoryParts
  }
}
    ${StoryPartsFragmentDoc}`;
export const StoryConnectionDocument = gql`
    query storyConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: StoryFilter) {
  storyConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...StoryParts
      }
    }
  }
}
    ${StoryPartsFragmentDoc}`;
export const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
export const PostConnectionDocument = gql`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostFilter) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      story(variables: StoryQueryVariables, options?: C): Promise<{data: StoryQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: StoryQueryVariables, query: string}> {
        return requester<{data: StoryQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: StoryQueryVariables, query: string}, StoryQueryVariables>(StoryDocument, variables, options);
      },
    storyConnection(variables?: StoryConnectionQueryVariables, options?: C): Promise<{data: StoryConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: StoryConnectionQueryVariables, query: string}> {
        return requester<{data: StoryConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: StoryConnectionQueryVariables, query: string}, StoryConnectionQueryVariables>(StoryConnectionDocument, variables, options);
      },
    post(variables: PostQueryVariables, options?: C): Promise<{data: PostQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostQueryVariables, query: string}> {
        return requester<{data: PostQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostQueryVariables, query: string}, PostQueryVariables>(PostDocument, variables, options);
      },
    postConnection(variables?: PostConnectionQueryVariables, options?: C): Promise<{data: PostConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostConnectionQueryVariables, query: string}> {
        return requester<{data: PostConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostConnectionQueryVariables, query: string}, PostConnectionQueryVariables>(PostConnectionDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { createClient, TinaClient } from "tinacms/dist/client";

const generateRequester = (
  client: TinaClient,
  options?: { branch?: string }
) => {
  const requester: (
    doc: any,
    vars?: any,
    options?: { branch?: string },
    client
  ) => Promise<any> = async (doc, vars, options) => {
    let url = client.apiUrl
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf('/')
      url = client.apiUrl.substring(0, index + 1) + options.branch
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url,
    })

    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} }
  }

  return requester
}

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () =>
  getSdk(
    generateRequester(
      createClient({
        url: "http://localhost:4001/graphql",
        queries,
      })
    )
  )

export const queries = (
  client: TinaClient,
  options?: {
    branch?: string
  }
) => {
  const requester = generateRequester(client, options)
  return getSdk(requester)
}

  
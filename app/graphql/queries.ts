import { gql } from '@apollo/client';

export const GET_POEMS = gql`
    query Poems {
        poems {
            createdAt
            id
            magazine
            published
            publishedAt
            title
            updatedAt
            url
        }
    }
`;

export const GET_POEM_BY_ID = gql`
  query GetPoemById($id: ID!) {
    poem(where: { id: $id }) {
        content{text}
        createdAt
        id
        magazine
        published
        publishedAt
        title
        updatedAt
        url
    }
  }
`;

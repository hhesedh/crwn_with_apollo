import { gql } from 'apollo-boost';

export const typeDefs = gql`
  extend type Mutation {
    ToggleCartHidden: Boolean!
  }
`;

const GET_CART_HIDDEN = gql`
  {
    ToggleCartHidden @client
  }

`

export const resolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, { cache }) => {
      const { cartHiden } = cache.readQuery({
        query: GET_CART_HIDDEN
      });

      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHiden: !cartHiden }
      });

      return  !cartHiden;
    }
  }
};
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl8czz09h146u01ulb0rpfsgu/master',
    cache: new InMemoryCache()
})
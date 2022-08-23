import {
    ApolloClient, InMemoryCache
} from '@apollo/client';

// iniciando Apollo CLient
const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
});

export default client;
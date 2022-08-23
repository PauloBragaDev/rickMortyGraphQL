import { StyleSheet, Text, View } from 'react-native';
import Home from './src/sreens/Home';
import { ApolloProvider } from '@apollo/client';
import client from './src/services';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home/>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

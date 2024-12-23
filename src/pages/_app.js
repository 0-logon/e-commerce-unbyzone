import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { client } from '@/graphql/index';
import { DataProvider } from "@/store/context/DataContext";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Provider } from 'react-redux';
import store from '@/store';

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <DataProvider>
          <Component {...pageProps} />
        </DataProvider>
      </Provider>
    </ApolloProvider>
  );
}

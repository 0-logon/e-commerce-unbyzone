import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { client } from '@/graphql/index';
import { DataProvider } from "@/global/context/DataContext";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </ApolloProvider>
  );
}

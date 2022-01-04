/*
Useful articles regarding the Apollo Cache
https://www.apollographql.com/blog/apollo-client/caching/when-to-use-refetch-queries/

https://elfi-y.medium.com/apollo-cache-52c8b29b16ab
*/

import './style/style.css';
import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import {
  InMemoryCache,
  ApolloClient,
  ApolloProvider,
} from "@apollo/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongEdit from './components/SongEdit';
import App from './components/App';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route element={<SongList />} index />
        <Route path="songs/new" element={<SongCreate />} />
        <Route path="songs/:songId" element={<SongEdit />} />
      </Route>
    </Routes>
  );
};

const Root: FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);

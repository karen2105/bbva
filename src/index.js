import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Layout from '@/containers/layout';
import store from '@/store';
import '@/style/main.scss';

const index = (
  <Provider  store={store}>
    <Layout />
  </Provider>
);

ReactDOM.render(index, document.getElementById("root"));

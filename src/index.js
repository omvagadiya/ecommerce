import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { Auth0Provider, } from '@auth0/auth0-react';
import { Provider } from 'react-redux';

import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Auth0Provider
  //   domain="dev-udca07pvlakzavdk.us.auth0.com"
  //   clientId="eZuiiBqwwIVUmbhyBCWtQQoopXzNNNPI"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin
  //   }}>
  //   <App />
  // </Auth0Provider>
  <Provider store={store}>
    <App/>
  </Provider>
);


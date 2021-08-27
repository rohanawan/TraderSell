
import 'bootstrap-css-only/css/bootstrap.min.css';
import './styles/style.css';
import reportWebVitals from './reportWebVitals';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/storeConfig/store';
import Logo from '../src/assets/imgs/png/nav/logo.png';
import 'bootstrap/dist/css/bootstrap.css';

const LazyApp = lazy(() => import('./App'));

ReactDOM.render(
  <Provider store={store}>
    <Suspense
      fallback={
        <div className="d-flex justify-content-center align-items-center loading-container"  >
          <img src={Logo} className="loading-logo" />
        </div>
      }
    >
      <LazyApp />
    </Suspense>
  </Provider >
  ,
  document.getElementById('root'));
reportWebVitals();


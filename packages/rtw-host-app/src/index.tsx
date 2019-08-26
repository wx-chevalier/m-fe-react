import { ConfigProvider } from 'antd';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as smoothscroll from 'smoothscroll-polyfill';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import App from './application/App';
import store from './store/redux/store';
import { history } from './skeleton/env/history';

export let importApp: Function | null = null;

export function render(_importApp: Function) {
  smoothscroll.polyfill();
  importApp = _importApp;

  ReactDOM.render(
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </ConfigProvider>,
    document.getElementById('root')
  );
}

export default App;

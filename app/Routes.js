import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import GraphPage from './containers/GraphPage';
import TablePage from './containers/TablePage';
import ExportPage from './containers/ExportPage';
import SettingsPage from './containers/SettingsPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.SETTINGS} component={SettingsPage} />
      <Route path={routes.EXPORT} component={ExportPage} />
      <Route path={routes.TABLE} component={TablePage} />
      <Route path={routes.GRAPH} component={GraphPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);

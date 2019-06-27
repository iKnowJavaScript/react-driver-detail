import Dashboard from '../pages/dashboard';
import DriversPage from '../pages/drivers';
import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Navigator = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/drivers" component={DriversPage} />
        <Route render={() => <h1>Page Not Found</h1>} />
      </Switch>
    </Router>
  );
};

export default Navigator;

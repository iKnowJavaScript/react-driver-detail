import Dashboard from '../pages/dashboard';
import DriversPage from '../pages/drivers';
import Trips from '../pages/trips';
import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { get } from 'https';

const Navigator = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/drivers" component={DriversPage} />
        <Route path="/trip/:tripId" component={Trips} />
        <Route
          render={() => (
            <h1
              style={{
                fontSize: '5rem',
                textAlign: 'center',
              }}
            >
              Page Not Found
            </h1>
          )}
        />
      </Switch>
    </Router>
  );
};

export default Navigator;

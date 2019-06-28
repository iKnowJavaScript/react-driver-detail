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
        <Route path="/Trips/:tripId" component={Trips} />
        <Route render={() => <h1>Page Not Found</h1>} />
      </Switch>
    </Router>
  );
};

export default Navigator;


// const TripInfo(props) => {
//   const {match:{params}} = props
//   get('api/trips/param.tripId')
// }

// <Route path="/Trips:param" component={Trips} /> //param i.e tripId - then link info to paramId === trip id
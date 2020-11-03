import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import CreateBarbecue from '../pages/CreateBarbecue';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/home" component={Home} isPrivate />
    <Route path="/create-barbecue" component={CreateBarbecue} isPrivate />
  </Switch>
);

export default Routes;

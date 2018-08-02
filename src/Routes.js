import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./components/Home/Home'),
  loading: Loading,
});

const Localisation = Loadable({
  loader: () => import('./components/Localisation/Localisation'),
  loading: Loading,
});

const Bixi = Loadable({
  loader: () => import('./components/Bixi/Bixi'),
  loading: Loading,
});

const Users = Loadable({
  loader: () => import('./components/Users/Users'),
  loading: Loading,
});

const NotFound = Loadable({
  loader: () => import('./components/NotFound/NotFound'),
  loading: Loading,
});

const Routes = () => (
  <BrowserRouter>
    <Switch onUpdate={() => window.scrollTo(0, 0)}>
      <Route exact path="/" component={Home} />
      <Route path="/localisation" component={Localisation}/>
      <Route path="/bixi" component={Bixi}/>
      <Route path="/users" component={Users}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;

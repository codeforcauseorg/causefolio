/* eslint-disable react/no-array-index-key */
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoadingScreen from 'src/components/LoadingScreen';
import Navigation from 'src/components/dashboard';
import MainLayout from 'src/layouts/MainLayout';
import HomeView from 'src/views/pages/HomeView';
import Error404View from 'src/views/pages/Error404View';
import Profile from 'src/components/Profile';
import EventDefaultPage from 'src/views/pages/events/eventdefault';
import IndividualEvent from './views/pages/events/individualEvent';
import Register from './views/pages/register/Register';
import CreateNewEvent from './components/CreateNewEvent';
import Settings from './views/pages/settings/Settings';
import LandingPage from './views/pages/HomeView/LandingPage';

const renderRoutes = () => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => (
          <MainLayout>
            <HomeView {...props} />
          </MainLayout>
        )}
      />
      <Route path="/register" exact render={() => <Register />} />
      <Route path="/dashboard" exact render={() => <Navigation />} />
      <Route path="/profile" exact render={() => <Profile />} />
      <Route path="/events" exact render={() => <EventDefaultPage />} />
      <Route path="/landing" exact render={() => <LandingPage />} />
      <Route
        path="/events/:eventID"
        exact
        render={() => <IndividualEvent />}
      />
      <Route path="/createEvent" exact render={() => <CreateNewEvent />} />
      <Route path="/settings" exact render={() => <Settings />} />
      <Route path="*" exact render={() => <Error404View />} />
    </Switch>
  </Suspense>
);

function Routes() {
  return renderRoutes({});
}

export default Routes;

/* eslint-disable react/no-array-index-key */
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoadingScreen from 'src/components/LoadingScreen';
import Navigation from 'src/components/dashboard';
import Error404View from 'src/views/pages/Error404View';
import Profile from 'src/components/Profile';
import EventDefaultPage from 'src/views/pages/events/eventdefault';
import IndividualEvent from './views/pages/events/individualEvent';
import Register from './views/pages/register/Register';
import CreateNewEvent from './components/CreateNewEvent';
import Settings from './views/pages/settings/Settings';
import LandingPage from './views/pages/HomeView/LandingPage';
import AuthGuard from './components/auth/AuthGuard';
import LoginPage from 'src/views/pages/login';
import PublicProfile from 'src/components/PublicProfile';

const renderRoutes = () => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      <Route path="/" exact render={() => <LandingPage />} />
      <Route path="/register" exact render={() => <Register />} />
      <Route path="/login" exact render={() => <LoginPage />} />
      <Route
        path="/dashboard"
        exact
        render={() => (
          <AuthGuard>
            <Navigation />
          </AuthGuard>
        )}
      />
      <Route
        path="/profile"
        exact
        render={() => (
          <AuthGuard>
            <Profile />
          </AuthGuard>
        )}
      />
      <Route
        path="/publicProfile/:userID"
        exact
        render={() => <PublicProfile />}
      />
      <Route path="/events" exact render={() => <EventDefaultPage />} />
      <Route
        path="/events/:eventID"
        exact
        render={() => (
          <AuthGuard>
            <IndividualEvent />
          </AuthGuard>
        )}
      />
      <Route
        path="/createEvent"
        exact
        render={() => (
          <AuthGuard>
            <CreateNewEvent />
          </AuthGuard>
        )}
      />
      <Route
        path="/settings"
        exact
        render={() => (
          <AuthGuard>
            <Settings />
          </AuthGuard>
        )}
      />
      <Route path="*" exact render={() => <Error404View />} />
    </Switch>
  </Suspense>
);

function Routes() {
  return renderRoutes({});
}

export default Routes;

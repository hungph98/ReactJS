import React, { lazy, Suspense} from 'react';
import { Skeleton } from 'antd'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { helper } from '../helpers/common';

const SearchPage = lazy(() => import('../pages/search/index'));
const PopularPage = lazy(() => import('../pages/popular/index'));
const UpcomingPage = lazy(() => import('../pages/upcoming/index'));
const LoginPage = lazy(() => import('../pages/login/index'));
const DetailPage = lazy(() => import('../pages/detail/index'));

const PrivateRoute = ({children, ...rest}) => {
  const auth = helper.isAuthenticated();
  return(
    <Route
      {...rest}
      render={({location}) => auth
            ? (children)
            : <Redirect to={{
              pathname: "/",
              state: { from: location }}
          }/>
    }
    />
  )
}

const IsLoginRoute = ({children, ...rest}) => {
  const auth = helper.isAuthenticated();
  return(
    <Route
      {...rest}
      render={({location}) => auth ?
            <Redirect to={{
              pathname: "/search-movie",
              state: { from: location }}
          }/>
          : (children)
    }
    />
  )
}

const RouteMovie = () => {
  return (
    <Router>
      <Suspense fallback={<Skeleton active />}>
        <Switch>
          <IsLoginRoute path="/" exact>
            <LoginPage/>
          </IsLoginRoute>
          <PrivateRoute path="/popular-movie">
            <PopularPage/>
          </PrivateRoute>
          <PrivateRoute path="/upcoming-movie">
            <UpcomingPage/>
          </PrivateRoute>
          <PrivateRoute path="/search-movie">
            <SearchPage/>
          </PrivateRoute>
          <PrivateRoute path="/movie-detail/:slug~:id">
            <DetailPage/>
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Router>
  )
}
export default React.memo(RouteMovie);
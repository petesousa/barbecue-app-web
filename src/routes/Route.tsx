import React from 'react';
import { RouteProps, Route as ReactDomRoute, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteWrapper extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteWrapper> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  return (
    <ReactDomRoute
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/home',
              state: { from: location },
            }}
          />
        );
      }}
      {...rest}
    />
  );
};

export default Route;

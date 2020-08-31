import React from "react";
import { useAuth } from "../../contexts/auth";
import { Route, Redirect } from "react-router-dom";
import { cookieService } from "../../services/storage";

export function ContextIntro({ children, ...rest }: any) {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuthenticated || cookieService.get(cookieService.CONTEXT_COOKIE_NAME) === "true" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/new-context",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export function PrivateRoute({ children, ...rest }: any) {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/welcome",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export function NonAuthRoute({ children, ...rest }: any) {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

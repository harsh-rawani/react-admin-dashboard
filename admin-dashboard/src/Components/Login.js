import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        Hello {user.name}{' '}
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log out
        </button>
      </div>
    );
  } else {
    return (
      <button
        onClick={() =>
          loginWithRedirect({
            connection: 'google-oauth2',
          })
        }
      >
        Login with Google
      </button>
    );
  }
}

export default Login;

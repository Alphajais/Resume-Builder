import React, { useState, useEffect, createContext, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth } from '../../firebase/firebase.config';

import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut as firebaseSignOut,
} from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const authValue = Auth();
  return (
    <AuthContext.Provider value={authValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const getUser = (user) => {
  const { email, displayName, photoURL } = user;
  return { email, name: displayName, photo: photoURL };
};

const Auth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(getUser(currentUser));
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((result) => {
        setUser(getUser(result.user));
        window.history.back();
        return result.user;
      })
      .catch((error) => {
        setUser(null);
        return error.message;
      });
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(getUser(result.user));
        window.history.back();
      })
      .catch((error) => {
        setUser(null);
        return error.message;
      });
  };

  const signUp = (email, password, name) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        return updateProfile(result.user, { displayName: name }).then(() => {
          setUser(getUser(result.user));
          window.history.back();
        });
      })
      .catch((error) => {
        setUser(null);
        return error.message;
      });
  };

  const signOut = () => {
    return firebaseSignOut(auth)
      .then(() => {
        setUser(null);
        return true;
      })
      .catch((error) => {
        console.error(error);
        return error.message;
      });
  };

  return {
    user,
    signIn,
    signUp,
    signOut,
    signInWithGoogle,
  };
};

export default Auth;

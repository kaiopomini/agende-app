import React, {createContext, useContext, useState, ReactNode} from 'react';
import {api} from '../services/api';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
};

type AuthContextData = {
  loading: boolean;
  user: User;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({children}: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  async function signIn(email: string, password: string) {
    try {
      setLoading(true);
      const {data} = await api.post('tokens', {
        email: email,
        password: password,
      });
      const {token} = data;
      if (data.type === 'success') {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const userInfo = await api.get('users/me');
        setUser({
          ...userInfo.data,
          token,
        });
      }
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  function signOut() {
    setUser({} as User);
  }

  return (
    <AuthContext.Provider value={{user, signIn, signOut, loading}}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {AuthProvider, useAuth};

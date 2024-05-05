import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";

import { getCurrentUser } from "@/lib/appwrite";

export type GlobalContextType = {
  loading: boolean;
  isLogged: boolean;
  user: any | null;
  setIsLogged: any | null;
  setUser: any | null;
};

const GlobalContext = createContext<GlobalContextType>({
  loading: false,
  isLogged: false,
  user: null,
  setIsLogged: null,
  setUser: null,
});

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }: PropsWithChildren) => {

  const [loading, setLoading] = useState<boolean>(true);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLogged(true);
          setUser(res);
        } else {
          setIsLogged(false);
          setUser(null);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const value = {
    loading,
    isLogged,
    user,
    setIsLogged,
    setUser,
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
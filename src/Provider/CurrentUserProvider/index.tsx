import { createContext, useContext, useState, ReactNode } from "react";
import data from "../../data.json";

interface CurrentUserProps {
  id: number;
  image: {
    png: string;
  };
  username: string;
}

interface ChildrenProps {
  children: ReactNode;
}

interface ContextProps {
  userCurrent: CurrentUserProps;
}
const CurrentUserContext = createContext({} as ContextProps);

export const CurrentUserProvider = ({ children }: ChildrenProps) => {
  const [userCurrent, setUserCurrent] = useState<CurrentUserProps>({
    ...data.currentUser,
  } as CurrentUserProps);

  return (
    <CurrentUserContext.Provider value={{ userCurrent }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useCurrent = () => useContext(CurrentUserContext);

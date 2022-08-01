import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import data from "../../data.json";
import { CommentProps } from "../../Interfaces/types";

interface ChildrenProps {
  children: React.ReactNode;
}

interface ContextProps {
  comments: CommentProps[];
  setComments: Dispatch<SetStateAction<CommentProps[]>>;
}

const CommentsContext = createContext({} as ContextProps);

export const CommentsProvider = ({ children }: ChildrenProps) => {
  const [comments, setComments] = useState<CommentProps[]>([]);

  useEffect(() => {
    setComments([...data.comments] as CommentProps[]);
  }, []);

  return (
    <CommentsContext.Provider value={{ comments, setComments }}>
      {children}
    </CommentsContext.Provider>
  );
};

export const useComments = () => useContext(CommentsContext);

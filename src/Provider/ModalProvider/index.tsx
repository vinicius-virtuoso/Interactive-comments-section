import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { CommentProps } from "../../Interfaces/types";
import { useComments } from "../CommentsProvider";

interface ModalContextProps {
  deleteReply: (
    repliesUser?: CommentProps[],
    id?: number | string,
    setRepliesUser?: Dispatch<SetStateAction<CommentProps[]>>
  ) => void;

  deleteComment: (id: number | string) => void;
}

interface ChildrenProps {
  children: ReactNode;
}

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

export const ModalProvider = ({ children }: ChildrenProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { comments, setComments } = useComments();

  function modalOpen() {
    setIsOpenModal(true);
  }

  function modalClose() {
    setIsOpenModal(false);
  }

  function deleteReply(
    repliesUser?: CommentProps[],
    id?: number | string,
    setRepliesUser?: Dispatch<SetStateAction<CommentProps[]>>
  ) {
    console.log(repliesUser);
    let newArrReplies = repliesUser?.filter(
      (reply: CommentProps) => reply.id !== id
    );
    if (newArrReplies && setRepliesUser) {
      setRepliesUser([...newArrReplies]);
    }
    modalClose();
  }

  function deleteComment(id: number | string) {
    let newArrComments = comments?.filter((allComment) => allComment.id !== id);
    if (newArrComments) {
      setComments([...newArrComments]);
    }
    modalClose();
  }

  return (
    <ModalContext.Provider value={{ deleteReply, deleteComment }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

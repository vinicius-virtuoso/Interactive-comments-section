import { Dispatch, SetStateAction } from "react";
import { CommentProps } from "../../Interfaces/types";
import { useModal } from "../../Provider/ModalProvider";
import {
  ButtonCancel,
  ButtonDelete,
  ButtonGroup,
  Modal,
  OverlayModal,
} from "./styles";

interface PropsModal {
  modalOpen: () => void;
  isReply?: boolean;
  replies: CommentProps[];
  id: number | string;
  setReplies: Dispatch<SetStateAction<CommentProps[]>>;
}

export const DeleteComment = ({
  modalOpen,
  isReply,
  replies,
  id,
  setReplies,
}: PropsModal) => {
  const { deleteComment, deleteReply } = useModal();
  console.log(isReply);

  return (
    <OverlayModal>
      {isReply === true ? (
        <Modal
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2>Delete comment</h2>
          <p>
            Are you sure yuo want to delete this comment? This will remove the
            comment and can't be undone.
          </p>

          <ButtonGroup>
            <ButtonCancel type="button" onClick={modalOpen}>
              NO, CANCEL
            </ButtonCancel>
            <ButtonDelete
              type="button"
              onClick={() => {
                deleteReply(replies, id, setReplies);
              }}
            >
              YES, DELETE
            </ButtonDelete>
          </ButtonGroup>
        </Modal>
      ) : (
        <Modal
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2>Delete comment</h2>
          <p>
            Are you sure yuo want to delete this comment? This will remove the
            comment and can't be undone.
          </p>

          <ButtonGroup>
            <ButtonCancel type="button" onClick={modalOpen}>
              NO, CANCEL
            </ButtonCancel>
            <ButtonDelete
              type="button"
              onClick={() => {
                deleteComment(id);
              }}
            >
              YES, DELETE
            </ButtonDelete>
          </ButtonGroup>
        </Modal>
      )}
    </OverlayModal>
  );
};

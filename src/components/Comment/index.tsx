import { Dispatch, SetStateAction, useState } from "react";
import {
  ButtonDelete,
  ButtonEdit,
  ButtonReply,
  ButtonScore,
  Card,
  CurrentButton,
  ContainerComment,
  Text,
  EditArea,
  ButtonUpdate,
} from "./styles";
import icon_plus from "../../assets/icon-plus.svg";
import icon_minus from "../../assets/icon-minus.svg";
import icon_reply from "../../assets/icon-reply.svg";
import icon_delete from "../../assets/icon-delete.svg";
import icon_edit from "../../assets/icon-edit.svg";
import { useCurrent } from "../../Provider/CurrentUserProvider";

import { CommentProps } from "../../Interfaces/types";
import { useComments } from "../../Provider/CommentsProvider";
import { CreateComment } from "../CreateComment";
import { DeleteComment } from "../DeleteComment";

interface CommentTypesSec {
  item: {
    hidden: { y: number; opacity: number };
    visible: {
      y: number;
      opacity: number;
    };
  };
  comment: CommentProps;
  replies: CommentProps[];
  setReplies: Dispatch<SetStateAction<CommentProps[]>>;
  isReply?: boolean;
}

export const Comment = ({
  item,
  comment,
  replies,
  setReplies,
  isReply,
}: CommentTypesSec) => {
  const { userCurrent } = useCurrent();
  const [score, setScore] = useState(comment?.score);
  const [textContent, setTextContent] = useState(comment?.content);
  const [userCont, setUserCont] = useState(0);
  const [replyText, setReplyText] = useState(false);
  const [editText, setEditText] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  function addScore() {
    if (userCont === 0) {
      setScore((comment.score += 1));
      setUserCont(userCont + 1);
    }
  }
  function subScore() {
    if (userCont > 0) {
      setScore((comment.score -= 1));
      setUserCont(userCont - 1);
    }
  }

  function replyComment() {
    setReplyText(!replyText);
  }

  function updateComment() {
    if (textContent.trim() && textContent !== "") {
      setEditText(false);
    }
  }

  function modalOpen() {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <>
      <ContainerComment animate={{ y: 0, opacity: 1 }} variants={item}>
        <Card>
          <header>
            <img
              src={comment?.user?.image?.png}
              alt={comment?.user?.username}
            />
            <strong>
              {comment?.user?.username}
              {comment?.user?.username === userCurrent.username && (
                <span>you</span>
              )}
            </strong>
            <span>{comment?.createdAt}</span>
          </header>
          {editText ? (
            <EditArea
              name="edit"
              id="edit"
              value={textContent}
              onChange={({ target }) => setTextContent(target.value)}
              autoFocus
            >
              {textContent}
            </EditArea>
          ) : (
            <Text>
              {comment?.replyingTo && <strong>@{comment?.replyingTo}</strong>}{" "}
              {textContent}
            </Text>
          )}

          <ButtonScore>
            <button onClick={addScore}>
              <img src={icon_plus} alt="add" />
            </button>
            {score}
            <button onClick={subScore}>
              <img src={icon_minus} alt="minus" />
            </button>
          </ButtonScore>

          {editText ? (
            <ButtonUpdate onClick={updateComment}>UPDATE</ButtonUpdate>
          ) : (
            <>
              {comment?.user?.username === userCurrent.username ? (
                <CurrentButton>
                  <ButtonDelete type="button" onClick={modalOpen}>
                    <img src={icon_delete} alt="delete" />
                    <span>Delete</span>
                  </ButtonDelete>

                  <ButtonEdit
                    type="button"
                    onClick={() => setEditText(!editText)}
                  >
                    <img src={icon_edit} alt="edit" />
                    <span>Edit</span>
                  </ButtonEdit>
                </CurrentButton>
              ) : (
                <ButtonReply type="button" onClick={replyComment}>
                  <img src={icon_reply} alt={"reply" + comment.id} />
                  <span>Reply</span>
                </ButtonReply>
              )}
            </>
          )}
        </Card>
        {replyText && (
          <CreateComment
            isReply
            replies={replies}
            setReplies={setReplies}
            usernameReply={comment?.user?.username}
            setReplyText={setReplyText}
          />
        )}
      </ContainerComment>
      {isOpenModal && (
        <DeleteComment
          id={comment.id}
          modalOpen={modalOpen}
          isReply={isReply}
          replies={replies}
          setReplies={setReplies}
        />
      )}
    </>
  );
};

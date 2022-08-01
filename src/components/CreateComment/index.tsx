import { Dispatch, SetStateAction, useState } from "react";
import { CommentProps } from "../../Interfaces/types";
import { useComments } from "../../Provider/CommentsProvider";
import { useCurrent } from "../../Provider/CurrentUserProvider";
import { NewComment } from "./styles";
import { v4 as uuidv4 } from "uuid";

interface CommentPropsType {
  isReply?: boolean;
  replies?: CommentProps[];
  setReplies?: Dispatch<SetStateAction<CommentProps[]>>;
  usernameReply?: string;
  setReplyText?: Dispatch<SetStateAction<boolean>>;
}

export const CreateComment = ({
  isReply,
  replies,
  setReplies,
  usernameReply,
  setReplyText,
}: CommentPropsType) => {
  const { userCurrent } = useCurrent();
  const { comments, setComments } = useComments();
  const [text, setText] = useState(usernameReply ? `@${usernameReply} ` : "");

  function addComment(text: string) {
    let newComment: CommentProps = {
      id: uuidv4(),
      content: text,
      createdAt: "01 sec ago",
      score: 0,
      user: {
        image: {
          png: userCurrent.image.png,
        },
        username: userCurrent.username,
      },
      replies: [],
    };
    setComments([...comments, newComment]);
    setText("");
  }

  function addReply(text: string) {
    if (replies && setReplies && setReplyText) {
      let newReply: CommentProps = {
        id: uuidv4(),
        content: text.replace(`@${usernameReply}`, ""),
        createdAt: "01 sec ago",
        score: 0,
        replyingTo: usernameReply,
        user: {
          image: {
            png: userCurrent.image.png,
          },
          username: userCurrent.username,
        },
      };
      setReplies([...replies, newReply]);
      setText("");
      setReplyText(false);
    }
  }

  return (
    <>
      {isReply ? (
        <NewComment>
          <img src={userCurrent.image.png} alt={userCurrent.username} />
          <textarea
            autoFocus
            name="comment"
            id="comment"
            onChange={({ target }) => setText(target.value)}
            value={text}
          ></textarea>
          <button onClick={() => addReply(text)}>SEND</button>
        </NewComment>
      ) : (
        <NewComment>
          <img src={userCurrent.image.png} alt={userCurrent.username} />
          <textarea
            autoFocus
            name="comment"
            id="comment"
            onChange={({ target }) => setText(target.value)}
            value={text}
            placeholder="Add a comment..."
          ></textarea>
          <button onClick={() => addComment(text)}>SEND</button>
        </NewComment>
      )}
    </>
  );
};

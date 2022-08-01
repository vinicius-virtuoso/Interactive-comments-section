import { Comment } from "../Comment";

import { ContainerCard, Line, ReplyContainer } from "./styles";
import { motion } from "framer-motion";
import { useState } from "react";
import { CommentProps } from "../../Interfaces/types";

interface CommentTypes {
  container: {
    hidden: { opacity: number; scale: number };
    visible: {
      opacity: number;
      scale: number;
      transition: {
        delayChildren: number;
        staggerChildren: number;
      };
    };
  };
  item: {
    hidden: { y: number; opacity: number };
    visible: {
      y: number;
      opacity: number;
    };
  };
  comment: CommentProps;
}

export const CommentsContainer = ({
  comment,
  item,
  container,
}: CommentTypes) => {
  const [repliesUser, setRepliesUser] = useState<CommentProps[]>(
    comment.replies ? comment.replies : []
  );

  return (
    <ContainerCard>
      <Comment
        comment={comment}
        item={item}
        replies={repliesUser}
        setReplies={setRepliesUser}
      />
      {repliesUser && repliesUser.length > 0 && (
        <ReplyContainer>
          <Line></Line>
          <motion.ul variants={container} initial="hidden" animate="visible">
            {repliesUser &&
              repliesUser.map((reply) => (
                <Comment
                  key={reply.id}
                  comment={reply}
                  item={item}
                  replies={repliesUser}
                  setReplies={setRepliesUser}
                  isReply
                />
              ))}
          </motion.ul>
        </ReplyContainer>
      )}
    </ContainerCard>
  );
};

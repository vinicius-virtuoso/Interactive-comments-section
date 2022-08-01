import { useComments } from "../../Provider/CommentsProvider";
import { CommentsContainer } from "../CommentsContainer";
import { CreateComment } from "../CreateComment";
import { Container, List } from "./styles";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const ListContainer = () => {
  const { comments } = useComments();

  return (
    <Container>
      <List variants={container} initial="hidden" animate="visible">
        {comments?.map((comment) => (
          <CommentsContainer
            key={comment.id}
            comment={comment}
            item={item}
            container={container}
          />
        ))}
      </List>
      <CreateComment />
    </Container>
  );
};

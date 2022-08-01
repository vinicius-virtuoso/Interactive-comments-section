export interface CommentProps {
  id: number | string;
  content: string;
  createdAt: string;
  score: number;
  replyingTo?: string;
  user: {
    image: {
      png: string;
    };
    username: string;
  };
  replies?: CommentProps[];
}

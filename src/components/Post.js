import { StyledPost } from "../assets/styles/GlobalStyles";

const Post = ({ post }) => {
  return (
    <StyledPost>
      <h3>{post.title.toUpperCase()}</h3>
      <small>Written by: {post.author}</small>
    </StyledPost>
  );
};

export default Post;

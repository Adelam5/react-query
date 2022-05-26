import { useParams } from "react-router-dom";
import { StyledPost } from "../assets/styles/GlobalStyles";
import { Spinner } from "../components/Spinner";
import usePost from "../hooks/usePost";

const ShowRQPost = () => {
  const { id } = useParams();

  const { isLoading, data: post, isError, error } = usePost(id);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h3>{error.message}</h3>;
  }

  return (
    <StyledPost to={`/rq-posts/${post.id}`}>
      <h3>{post?.title.toUpperCase()}</h3>
      <p>{post?.body}</p>
      <small>Written by: {post?.author}</small>
    </StyledPost>
  );
};

export default ShowRQPost;

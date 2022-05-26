import { useQuery } from "react-query";
import axios from "axios";

import Post from "../components/Post";
import { Spinner } from "../components/Spinner";

import { Grid, DeleteButton, Card } from "../assets/styles/GlobalStyles";
import { Link } from "react-router-dom";
import AddPost from "../components/AddPost";
import useDeletePost from "../hooks/useDeletePost";

const RQPosts = () => {
  const { isLoading, data, isError, error } = useQuery("posts", () => {
    return axios.get("http://localhost:4000/posts");
  });

  const { mutate: deletePost } = useDeletePost();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h3>{error.message}</h3>;
  }
  return (
    <div>
      <h1>RQ Posts</h1>
      <AddPost />
      <Grid>
        {data?.data.map((post) => (
          <Card key={post.id}>
            <Link to={`/rq-posts/${post.id}`}>
              <Post post={post} />
            </Link>
            <DeleteButton onClick={() => deletePost(post.id)}>x</DeleteButton>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default RQPosts;

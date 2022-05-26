import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "../components/Spinner";
import Post from "../components/Post";
import { Grid } from "../assets/styles/GlobalStyles";
import { Link } from "react-router-dom";

const Posts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:4000/posts")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <Grid>
        {data.map((post) => (
          <Link to={`/posts/${post.id}`} key={post.id}>
            <Post post={post} />
          </Link>
        ))}
      </Grid>
    </div>
  );
};

export default Posts;

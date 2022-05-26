import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { StyledPost } from "../assets/styles/GlobalStyles";
import { Spinner } from "../components/Spinner";

const ShowPost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/posts/${id}`)
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
    <StyledPost to={`/posts/${data.id}`}>
      <h3>{data.title.toUpperCase()}</h3>
      <p>{data.body}</p>
      <small>Written by: {data.author}</small>
    </StyledPost>
  );
};

export default ShowPost;

import { useState } from "react";
import { Link } from "react-router-dom";

import Post from "../components/Post";
import { Spinner } from "../components/Spinner";

import { Grid, Pagination, StyledButton } from "../assets/styles/GlobalStyles";
import usePaginatedPosts from "../hooks/usePaginatedPosts";

const PaginatedPosts = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, data, isError, error } = usePaginatedPosts(pageNumber);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h3>{error.message}</h3>;
  }

  return (
    <div>
      <h1>RQ Posts</h1>
      <Grid>
        {data?.map((post) => (
          <Link to={`/rq-posts/${post.id}`} key={post.id}>
            <Post post={post} />
          </Link>
        ))}
      </Grid>
      <Pagination>
        <StyledButton
          onClick={() => setPageNumber((prev) => prev - 1)}
          disabled={pageNumber === 1}
        >
          Previous Page
        </StyledButton>
        <span>Page {pageNumber}</span>
        <StyledButton
          onClick={() => setPageNumber((prev) => prev + 1)}
          disabled={pageNumber === 4}
        >
          Next Page
        </StyledButton>
      </Pagination>
    </div>
  );
};

export default PaginatedPosts;

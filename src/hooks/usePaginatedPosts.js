import { useQuery } from "react-query";
import axios from "axios";

const getPaginatedPosts = async (pageNumber) => {
  const { data } = await axios.get(
    `http://localhost:4000/posts?_limit=2&_page=${pageNumber}`
  );
  return data;
};

export default function usePaginatedPosts(pageNumber) {
  return useQuery(["posts", pageNumber], () => getPaginatedPosts(pageNumber));
}

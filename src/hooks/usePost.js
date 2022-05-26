import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const getPost = async (postId) => {
  const { data } = await axios.get(`http://localhost:4000/posts/${postId}`);
  return data;
};

export default function usePost(postId) {
  const queryClient = useQueryClient();
  return useQuery(["posts", postId], () => getPost(postId), {
    initialData: () => {
      const post = queryClient
        .getQueryData("posts")
        ?.data?.find((post) => post.id === postId);
      if (post) {
        return post;
      } else {
        return undefined;
      }
    },
  });
}

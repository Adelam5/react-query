import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const deletePost = async (postId) => {
  const { data } = await axios.delete(`http://localhost:4000/posts/${postId}`);
  return data;
};

export default function useDeletePost() {
  const queryClient = useQueryClient();
  return useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });
}

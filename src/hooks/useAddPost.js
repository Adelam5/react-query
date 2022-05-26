import { useMutation } from "react-query";
import axios from "axios";

const addPost = async (newPost) => {
  const { data } = await axios.post("http://localhost:4000/posts", newPost);
  return data;
};

export default function useAddPost() {
  return useMutation(addPost);
}

import { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "../assets/styles/GlobalStyles";
import useAddPost from "../hooks/useAddPost";

const NewPost = styled.div`
  display: flex;
  align-items: center;

  label {
    margin-left: 10px;
    margin-right: 4px;
  }

  input {
    height: 35px;
    border: 1px solid #ababab;
    border-radius: 5px;
    padding: 5px;
  }
`;

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const { mutate } = useAddPost();

  const handleAddPost = () => {
    const post = { title, body, author };
    console.log(post);
    mutate(post);
  };

  return (
    <NewPost>
      <label htmlFor="title">Title: </label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="body">Text: </label>
      <input
        type="text"
        id="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <label htmlFor="author">Author: </label>
      <input
        type="text"
        id="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <StyledButton onClick={handleAddPost}>+ Add Post</StyledButton>
    </NewPost>
  );
};

export default AddPost;

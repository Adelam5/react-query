import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import RQPosts from "./pages/RQ-Posts";

import GlobalStyles, { Main } from "./assets/styles/GlobalStyles";
import ShowPost from "./pages/ShowPost";
import ShowRQPost from "./pages/ShowRQPost";
import PaginatedPosts from "./pages/PaginatedPosts";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<ShowPost />} />
          <Route path="rq-posts" element={<RQPosts />} />
          <Route path="rq-posts/:id" element={<ShowRQPost />} />
          <Route path="/rq-posts-paginated" element={<PaginatedPosts />} />
        </Routes>
      </Main>
    </>
  );
};

export default App;

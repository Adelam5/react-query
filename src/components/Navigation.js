import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #ff4154;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Navigation = () => {
  return (
    <Nav>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Posts
        </NavLink>
        <NavLink
          to="/rq-posts"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          RQ-Posts
        </NavLink>
        <NavLink
          to="/rq-posts-paginated"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Paginated RQ Posts
        </NavLink>
      </div>
    </Nav>
  );
};

export default Navigation;

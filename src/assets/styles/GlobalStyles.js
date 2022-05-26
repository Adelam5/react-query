import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyles = createGlobalStyle`
 * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    
a {
      text-decoration: none;
      color: inherit;
      margin-left: 20px;
    }

.active {
  border-bottom: 3px solid #fff;
}
`;

export const Main = styled.div`
  margin: 20px auto;
  max-width: 1000px;
`;

export const Grid = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

export const StyledButton = styled.button`
  background-color: #ff4154;
  color: #fffff2;
  font-size: 1.2rem;
  border: none;
  border-radius: 3px;
  padding: 11px 10px;
  margin: 4px;
  align-self: center;

  &:disabled {
    opacity: 0.7;
  }
`;

export const DeleteButton = styled(StyledButton)`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const Card = styled.div`
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

export const StyledPost = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    margin-bottom: 10px;
  }
  p {
    padding: 5px;
    text-align: justify;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default GlobalStyles;

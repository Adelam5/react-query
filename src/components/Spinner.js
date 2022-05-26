import Spin from "../assets/images/spinner.gif";
import styled from "styled-components";

export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
  & > img {
    max-width: 100px;
  }
`;

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <img src={Spin} alt="Loading Spinner" />;
    </SpinnerContainer>
  );
};

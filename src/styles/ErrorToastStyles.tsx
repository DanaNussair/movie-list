import styled, { keyframes } from "styled-components";

type ErrorToastWrapperProps = {
  isDisplayed: boolean;
};

const slideUp = keyframes`
    0% {
      transform: translateY(100%) translateX(-50%);
      opacity: 0;
    }
     
    100% {
      transform: translateY(0) translateX(-50%);
      opacity: 1;
    }
`;

export const ErrorToastWrapper = styled.div<ErrorToastWrapperProps>`
  ${({ isDisplayed }) => (isDisplayed ? `display: flex;` : `display: none;`)}

  justify-content: center;
  width: 360px;
  background-color: red;
  padding: 26px;
  font-weight: bold;
  text-align: center;
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  cursor: pointer;
  border-radius: 10px;

  ::after {
    content: "\\00D7";
    position: absolute;
    top: 2px;
    right: 8px;
    font-size: 30px;
    border-radius: 20px;
  }
  animation-name: ${slideUp};
  animation-duration: 0.5s;
  animation-timing-function: ease-in;
`;

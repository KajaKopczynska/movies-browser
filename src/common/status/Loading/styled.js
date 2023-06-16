import styled from "styled-components";

const mobileMinBP = ({ theme }) => theme.breakpoints.mobileMin;
const largeBP = ({ theme }) => theme.breakpoints.large;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1368px;
  margin: auto;
`;

export const LoadingAnimation = styled.div`
  border: 12px solid ${({ theme }) => theme.colors.snuff};
  border-top: 12px solid ${({ theme }) => theme.colors.black};
  width: 91px;
  height: 91px;
  margin: 40px;
  border-radius: 50%;
  align-self: center;
  animation: spin 1s linear infinite;
  transition: 0.5s;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${largeBP}px) {
    border: 8px solid ${({ theme }) => theme.colors.snuff};
    border-top: 8px solid ${({ theme }) => theme.colors.black};
    width: 65px;
    height: 65px;
  }

  @media (max-width: ${mobileMinBP}px) {
    border: 4px solid ${({ theme }) => theme.colors.snuff};
    border-top: 4px solid ${({ theme }) => theme.colors.black};
    width: 35px;
    height: 35px;
  }
`;
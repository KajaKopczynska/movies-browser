import styled, { css, keyframes } from "styled-components";
import { ReactComponent as ArrowLeft } from "./ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "./ArrowRight.svg";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 103px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.pattensBlue};
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  margin-right: 12px;
  cursor: pointer;
  transition: background 0.1s;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.mystic};
    pointer-events: none;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.linkWater};
  }

  @media (max-width: ${mobileBP}px) {
    margin-right: 8px;
  }
`;

export const ArrowIconLeft = styled(ArrowLeft)`
  color: ${({ theme }) => theme.colors.scienceBlue};
  margin: 0 4px;

  ${({ mobile }) =>
    mobile &&
    css`
      display: none;
    `}

  ${Button}:disabled & {
    color: ${({ theme }) => theme.colors.waterloo};
  }

  ${Button}:hover & {
    animation: ${pulseAnimation} 1s linear infinite;
  }

  @media (max-width: ${mobileBP}px) {
    display: block;
  }
`;

export const ButtonText = styled.p`
  margin: 0 4px;

  @media (max-width: ${mobileBP}px) {
    display: none;
  }
`;

export const PageCounter = styled.div`
  color: ${({ theme }) => theme.colors.waterloo};
  font-size: 16px;
  line-height: 150%;
  margin: 0 24px 0 16px;

  @media (max-width: ${mobileBP}px) {
    font-size: 10px;
    line-height: 24px;
    margin: 0 8px 0 0;
  }
`;

export const PageNumbers = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  line-height: 150%;
  margin: 0 8px;
  font-weight: 600;

  @media (max-width: ${mobileBP}px) {
    font-size: 10px;
    line-height: 24px;
    margin: 0 2px;
    font-weight: 600;
  }
`;

export const ArrowIconRight = styled(ArrowRight)`
  color: ${({ theme }) => theme.colors.scienceBlue};
  margin: 0 4px;

  ${({ mobile }) =>
    mobile &&
    css`
      display: none;
    `}

  ${Button}:disabled & {
    color: ${({ theme }) => theme.colors.waterloo};
  }

  ${Button}:hover & {
    animation: ${pulseAnimation} 1s linear infinite;
  }

  @media (max-width: ${mobileBP}px) {
    display: block;
  }
`;
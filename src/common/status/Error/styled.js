import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as StyledDangerIcon } from "./DangerIcon.svg"

const mobileMinBP = ({ theme }) => theme.breakpoints.mobileMin;
const largeBP = ({ theme }) => theme.breakpoints.large;

export const Wrapper = styled.div`
  margin: 198px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  @media (max-width: ${largeBP}px) {
    scale:85%;
  }
    @media (max-width: ${mobileMinBP}px) {
    scale:70%;
  }
`;

export const DangerIcon = styled(StyledDangerIcon)`
  margin: 14px;
  width: 100px;
  height: 100px;
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.smoke};
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  text-align: center;
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.smoke};
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  text-align: center;
`;

export const Button = styled(NavLink)`
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.scienceBlue};
  border: none;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 24px;
  padding: 16px 24px;
  gap: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  :hover{
    cursor: pointer;
    filter: brightness(110%);
  };
  :active{
    filter: brightness(120%);
  };
`;
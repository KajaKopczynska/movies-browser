import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as VideoIcon } from "./VideoIcon.svg";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 23px 16px;
  height: 94px;

  @media (max-width: ${mobileBP}px) {
    background: ${({ theme }) => theme.colors.black};
    padding: 16px;
    height: 142px;
  }
`;

export const TitleLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: ${mobileBP}px) {
    gap: 8px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: auto;
  display: grid;
  gap: 16px;
  grid-template-columns: auto minmax(205px, 432px);

  @media (max-width: ${mobileBP}px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: ${mobileBP}px) {
    justify-content: space-between;
    gap: 20px;
  }
`;

export const StyledVideoIcon = styled(VideoIcon)`
  flex-shrink: 0;

  @media (max-width: ${mobileBP}px) {
  width: 17px;
  height: 17px;
}
`;

export const TittleText = styled.div`
  font-size: 24px;
  font-weight: 500;
  flex-shrink: 0;

  @media (max-width: ${mobileBP}px) {
    font-size: 13px;
  }
`;

export const Navigation = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 16px;

  @media (max-width: ${mobileBP}px) {
    gap: 12px;
    margin-left: 30px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  background: none;
  border: none;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  padding: 13.5px 24px;
  text-decoration: none;
  display: block;

  &:hover {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.white};   /* temporarily */
  }

  &:active {
    border: 1px solid ${({ theme }) => theme.colors.white};
  }

  @media (max-width: ${mobileBP}px) {
    font-size: 12px;
    padding: 8px 12px;
  }
`;
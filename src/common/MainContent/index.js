import styled, { css } from "styled-components";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const MainContent = styled.main`
  padding: 0 16px 40px;

  @media (max-width: ${mobileBP}px) {
    padding: 12px 16px 32px;
  }
  
  ${({ moviePage }) =>
    moviePage &&
    css`
      padding-top: 0;
      padding-bottom: 336px;

      @media (max-width: ${mobileBP}px) {
        padding: 16px;
      }
    `}
`;

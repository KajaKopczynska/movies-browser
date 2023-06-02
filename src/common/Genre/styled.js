import styled, { css } from "styled-components";
const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const GenreWrapper = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  margin-top: 0px;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  gap: 8px;

  @media (max-width: ${mobileBP}px) {
    line-height: 11px;
    padding: 4px 8px;
    font-size: 10px;
  }

  ${({ location }) =>
        location === "movieInfo" &&
        css`
          margin-bottom: 24px;

    @media (max-width: ${mobileBP}px) {
      padding: 0;
  }
    `}
`;

export const GenreTag = styled.div`
  display: flex;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.mystic};
  color: ${({ theme }) => theme.colors.smoke};

  @media (max-width: ${mobileBP}px) {
    padding: 4px 8px;
  }
`;
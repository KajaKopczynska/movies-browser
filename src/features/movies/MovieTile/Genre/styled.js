import styled from "styled-components";
const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const GenreWrapper = styled.div`
  margin-top: 0px;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;

  @media (max-width: ${mobileBP}px) {
    line-height: 11px;
    padding: 4px 8px;
    font-size: 10px;
  }
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
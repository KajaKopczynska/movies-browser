import styled from "styled-components";
const mobileMediumBP = ({ theme }) => theme.breakpoints.medium;
const mobileMaxBP = ({ theme }) => theme.breakpoints.mobileMax;
const mobileLargeBP = ({ theme }) => theme.breakpoints.large;

export const MovieList = styled.div`
  padding: 0;
  margin: 0;
  display: grid;
  gap: 24px;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;

  @media (max-width: ${mobileLargeBP}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${mobileMaxBP}px) {
    gap: 16px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${mobileMediumBP}px) {
    gap: 16px;
    grid-template-columns: 1fr;
  }
`;

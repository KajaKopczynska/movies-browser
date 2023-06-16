import styled from "styled-components";

const largeBP = ({ theme }) => theme.breakpoints.large;
const mobileMaxBP = ({ theme }) => theme.breakpoints.mobileMax;
const mediumBP = ({ theme }) => theme.breakpoints.medium;

export const MoviesList = styled.div`
  padding: 0;
  margin: 0;
  display: grid;
  gap: 24px;
  justify-content: center;
  list-style: none;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${largeBP}px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  @media (max-width: ${mobileMaxBP}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  @media (max-width: ${mediumBP}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;


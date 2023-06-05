import styled from "styled-components";
const mobileMaxBP = ({ theme }) => theme.breakpoints.mobileMax;

export const PeopleList = styled.div`
  padding: 0;
  margin: 0;
  display: grid;
  gap: 24px;
  justify-content: center;
  list-style: none;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));

  @media (max-width: ${mobileMaxBP}px) {
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
  }`;

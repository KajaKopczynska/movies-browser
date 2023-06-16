import styled from "styled-components";

const mobileMaxBP = ({ theme }) => theme.breakpoints.mobileMax;

export const Name = styled.h2`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin: 0;

  @media (max-width: ${mobileMaxBP}px) {
    font-weight: 500;
    font-size: 16px;
  }
`;
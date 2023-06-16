import styled from "styled-components";
import { ReactComponent as NoResults } from "./NoResults.svg";

const mobileMinBP = ({ theme }) => theme.breakpoints.mobileMax;
const largeBP = ({ theme }) => theme.breakpoints.large;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1368px;
  margin: auto;
  align-items: flex-start;
`;

export const NoResultsImage = styled(NoResults)`
  align-self: center;

   @media (max-width: ${largeBP}px) {
     scale: 80%;
     margin: -100px;
   }
   
   @media (max-width: ${mobileMinBP}px) {
     scale: 50%;
     margin: -150px;
   }
`;
import styled from "styled-components";

const mobileMaxBP = ({ theme }) => theme.breakpoints.mobileMax;

export const MovieInfoWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 40px;
  margin-top: 64px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  display: grid;
  /* justify-items: center; */
  grid-column-gap: 40px;
  grid-template-columns: minmax(114px, 312px) auto;
  grid-template-areas:
    "i information"
    "i description"
    "i x";


  @media (max-width: ${mobileMaxBP}px) {
    grid-template-columns: auto 1fr;
    padding: 12px;
  }
`;

export const Image = styled.img`
  /* display: flex; */
  /* justify-content: center; */
  height: 434px;
  width: 292px;
  border-radius: 5px;
  margin-bottom: 24px;
  grid-area: i;

  @media (max-width: ${mobileMaxBP}px) {
    width: 114px;
    height: 169px;
  }
`;

export const Information = styled.div`
  display: flex;
  justify-self: left;
  flex-direction: column;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between; */
  /* display: grid; */
  grid-area: information;

  @media (max-width: ${mobileMaxBP}px) {
    justify-content: start;
    margin: 0 0 0 8px;
    gap: 4px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.smoke};
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 16px 0 0;

  @media (max-width: ${mobileMaxBP}px) {
    margin: 0 0 0 8px;
    font-size: 16px;
  }
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.waterloo};
  font-size: 18px;
  font-weight: 400;
  margin: 0;

  @media (max-width: ${mobileMaxBP}px) {
    margin: 0 0 0 8px;
    font-size: 12px;
  }
`;

export const Details = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;

  @media (max-width: ${mobileMaxBP}px) {
    font-size: 12px;
  }
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.stormGrey};
  margin-right: 10px;

  @media (max-width: ${mobileMaxBP}px) {
    display: none;
  }
`;

export const CountryName = styled.span`

  @media (max-width: ${mobileMaxBP}px) {
    display: none;
  }
`;

export const CountryNameShort = styled.span`
    display: none;

  @media (max-width: ${mobileMaxBP}px) {
    display: inline;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 160%;
  /* margin: 0; */
  grid-area: description;

  @media (max-width: ${mobileMaxBP}px) {
    font-size: 14px;
  }
`;
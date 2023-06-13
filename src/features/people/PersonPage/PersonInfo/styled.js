import styled from "styled-components";

const mobileMaxBP = ({ theme }) => theme.breakpoints.mobileMax;

export const PersonInfoWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 40px;
  margin-top: 64px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  display: grid;
  column-gap: 40px;
  grid-column-gap: 40px;
  grid-template-columns: minmax(116px, 399px) auto;
  grid-template-areas:
    "image information"
    "image description"
    "image x";

  @media (max-width: ${mobileMaxBP}px) {
    grid-template-columns: auto 1fr;
    grid-column-gap: 16px;
    column-gap: 16px;
    margin-top: 0px;
    padding: 16px;

    grid-template-areas:
    "image information"
    "image information"
    "description description";
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 20px;
  grid-area: image;

  @media (max-width: ${mobileMaxBP}px) {
    width: 116px;
  }
`;

export const Information = styled.div`
  display: flex;
  justify-self: left;
  flex-direction: column;
  grid-area: information;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.smoke};
  font-size: 36px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;

  @media (max-width: ${mobileMaxBP}px) {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const Details = styled.div`
  font-size: 18px;
  line-height: 1.3;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 24px 0;

  @media (max-width: ${mobileMaxBP}px) {
    font-size: 12px;
    margin: 16px 0;
    line-height: 1.4;
  }
`;

export const LabelWrapper = styled.div`
  
  @media (max-width: ${mobileMaxBP}px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.stormGray};
  margin-right: 10px;

  @media (max-width: ${mobileMaxBP}px) {
    display: none;
  }
`;

export const LabelShort = styled.span`
  display: none;

  @media (max-width: ${mobileMaxBP}px) {
    color: ${({ theme }) => theme.colors.stormGray};
    margin-right: 6px;
    display: inline;
  }
`;

export const ValueLabel = styled.span`
    color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${mobileMaxBP}px) {
  }
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 160%;
  margin-top: -10px;
  grid-area: description;

  @media (max-width: ${mobileMaxBP}px) {
    font-size: 14px;
    margin: 0;
  }
`;
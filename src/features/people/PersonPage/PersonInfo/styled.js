import styled from "styled-components";

const mobileMaxBP = ({ theme }) => theme.breakpoints.mobileMax;

export const PersonInfoWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 40px;
  margin-top: 64px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  display: grid;
  /* justify-items: center; */
  grid-column-gap: 40px;
  grid-template-columns: minmax(114px, 312px) auto;
  grid-template-areas:
    "image information"
    "image description"
    "image x";

  @media (max-width: ${mobileMaxBP}px) {
    grid-template-columns: auto 1fr;
    grid-column-gap: 16px;
    margin-top: 0px;
    padding: 16px;

    grid-template-areas:
    "image information"
    "image information"
    "description description";
  }
`;

export const Image = styled.img`
  /* display: flex; */
  /* justify-content: center; */
  height: 434px;
  width: 292px;
  border-radius: 5px;
  margin-bottom: 20px;
  grid-area: image;

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
  font-size: 36px;
  font-weight: 600;
  line-height: 1.3;
  margin: 16px 0 0;

  @media (max-width: ${mobileMaxBP}px) {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
  }
`;
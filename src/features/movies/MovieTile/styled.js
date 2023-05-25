import styled from "styled-components";
import { ReactComponent as StarIcon } from "./Images/Star.svg";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const TileWrapper = styled.div`
  height: 100%;
  background: #ffffff;
  display: grid;
  grid-template-rows: auto 1fr;
  transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  padding: 16px;

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px 5px #9aa6b8;
  }
  &:active {
    transform: translateY(-5px);
  }

  @media (max-width: ${mobileBP}px) {
    grid-template-columns: auto 1fr;
    padding: 12px;
  }
`;

export const Image = styled.img`
  display: flex;
  justify-content: center;
  height: 434px;
  width: 292px;
  border-radius: 5px;

  @media (max-width: ${mobileBP}px) {
    width: 114px;
    height: 169px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;

  @media (max-width: ${mobileBP}px) {
    justify-content: start;
    margin: 0 0 0 8px;
    gap: 4px;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.smoke};
  margin: 16px 0 0;

  @media (max-width: ${mobileBP}px) {
    margin: 0 0 0 8px;
    font-size: 16px;
  }
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin: 0;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${mobileBP}px) {
    margin: 0 0 0 8px;
    font-size: 12px;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Star = styled(StarIcon)`
  width: 24px;
  height: 21px;

  @media (max-width: ${mobileBP}px) {
    width: 16px;
    height: 16px;
  }
`;

export const Rate = styled.span`
  color: ${({ theme }) => theme.colors.smoke};
  font-size: 16px;
  line-height: 150%;
  font-weight: 600;
  margin: 0 0 0 10px;

  @media (max-width: ${mobileBP}px) {
    font-size: 13px;
    line-height: 130%;
    margin: 0 0 0 10px;
  }
`;

export const Votes = styled.span`
  color: ${({ theme }) => theme.colors.waterloo};
  font-size: 16px;
  line-height: 150%;
  margin: 0 0 0 10px;
  @media (max-width: ${mobileBP}px) {
    font-size: 13px;
    line-height: 130%;
    margin: 0 0 0 10px;
  }
`;



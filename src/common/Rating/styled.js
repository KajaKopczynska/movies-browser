import styled, { css } from "styled-components";
import { ReactComponent as StarIcon } from "./Star.svg";

const mobileMaxBP = ({ theme }) => theme.breakpoints.mobileMax;

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  @media (max-width: ${mobileMaxBP}px) {
    gap: 7px;
  }
  ${({ location }) =>
        location === "backgroundPoster" &&
        css`
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;

      @media (max-width: ${mobileMaxBP}px) {
        flex-direction: row;
        align-items: center;
      }
    `}
`;

export const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Star = styled(StarIcon)`
  width: 24px;
  height: 22px;

  @media (max-width: ${mobileMaxBP}px) {
    width: 16px;
    height: 16px;
  }
  ${({ location }) =>
        location === "backgroundPoster" &&
        css`
      width: 40px;
      height: 38px;
    `}
`;

export const Rate = styled.span`
  font-weight: 500;
  font-size: 22px;

  @media (max-width: ${mobileMaxBP}px) {
    font-weight: 600;
    font-size: 13px;
  }
  ${({ location }) =>
        location === "backgroundPoster" &&
        css`
      font-size: 30px;

      @media (max-width: ${mobileMaxBP}px) {
        font-size: 14px;
      }
    `}
`;

export const MaxRate = styled.span`
  font-size: 16px;

  @media (max-width: ${mobileMaxBP}px) {
    display: none;
  }
  ${({ location }) =>
        location === "backgroundPoster" &&
        css`
      @media (max-width: ${mobileMaxBP}px) {
        visibility: visible;
      }
    `}
`;

export const Votes = styled.span`
  font-size: 14px;
  @media (max-width: ${mobileMaxBP}px) {
    color: ${({ theme }) => theme.colors.stormGrey};
    font-size: 13px;
  }
  ${({ location }) =>
        location === "backgroundPoster" &&
        css`
      font-size: 16px;

      @media (max-width: ${mobileMaxBP}px) {
        color: white;
        font-size: 10px;
      }
    `}
`;

import styled, { css } from "styled-components";
import { ReactComponent as StarIcon } from "./Star.svg";

const mobileMaxBP = ({ theme }) => theme.breakpoints.mobileMax;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;

  ${({ location }) =>
        location === "backgroundPoster" &&
        css`
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;

      @media (max-width: ${mobileMaxBP}px) {
        flex-direction: row;
        align-items: center;
        gap: 7px;
      }
    `}
`;

export const RatingSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Star = styled(StarIcon)`
    width: 24px;
    height: 21px;

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
  color: ${({ theme }) => theme.colors.smoke};
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  margin: 0 10px 0 10px;

  @media (max-width: ${mobileMaxBP}px) {
    font-size: 13px;
    line-height: 130%;
  }
  ${({ location }) =>
        location === "backgroundPoster" &&
        css`
      color: ${({ theme }) => theme.colors.white};
      font-size: 30px;

      @media (max-width: ${mobileMaxBP}px) {
        font-size: 14px;
      }
    `}
  ${({ location }) =>
        location === "movieInfo" &&
        css`
          font-size: 22px;
    `}
`;

export const MaxRate = styled.span`
  font-size: 16px;
  visibility: visible;

  @media (max-width: ${mobileMaxBP}px) {
    font-size: 10px;
  }
  ${({ location }) =>
        location === "backgroundPoster" &&
        css`

      @media (max-width: ${mobileMaxBP}px) {
        visibility: visible;
      }
    `}  

  ${({ location }) =>
        location === "movieTile" &&
        css`
        visibility: collapse;
        display: none;
    `}

  ${({ location }) =>
        location === "movieInfo" &&
        css`
        font-size: 14px;
        visibility: visible;

      @media (max-width: ${mobileMaxBP}px) {
        visibility: collapse;
        display: none;
      }
    `}
`;

export const Votes = styled.span`
  color: ${({ theme }) => theme.colors.waterloo};
  font-size: 16px;
  line-height: 150%;
  margin: 0 0 0 10px;

  @media (max-width: ${mobileMaxBP}px) {
    font-size: 10px;
    line-height: 130%;
  }
  ${({ location }) =>
        location === "backgroundPoster" &&
        css`
      color: ${({ theme }) => theme.colors.white};
      font-size: 16px;

      @media (max-width: ${mobileMaxBP}px) {
        font-size: 10px;
      }
    `}
  ${({ location }) =>
        location === "movieInfo" &&
        css`
          color: ${({ theme }) => theme.colors.black};
          font-size: 14px;

       @media (max-width: ${mobileMaxBP}px) {
          color: ${({ theme }) => theme.colors.waterloo};
          font-size: 13px;
          margin: 0;
      }
    `}
`;

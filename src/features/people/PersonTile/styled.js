import styled from "styled-components";
import { Link } from "react-router-dom";
const mobileBP = ({ theme }) => theme.breakpoints.mobileMin;

export const TileWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
  text-align: center;
  display: block;
  transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
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
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  object-fit: cover;
  aspect-ratio: 3 / 4;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.smoke};
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 12px 0 0 0;

  @media (max-width: ${mobileBP}px) {
    font-size: 14px;
    margin: 8px 0 0 0;
  }
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.waterloo};
  font-size: 18px;
  margin: 8px 0 0 0;

  @media (max-width: ${mobileBP}px) {
    font-size: 13px;
  }
`;
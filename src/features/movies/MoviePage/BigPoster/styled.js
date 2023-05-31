import styled from "styled-components";
const mobileMaxBP = ({ theme }) => theme.breakpoints.mobileMax;

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  position: relative; 
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
`;

export const Info = styled.div`
  display: grid;
  gap: 25px;
  position: absolute;
  bottom: 56px;
  left: clamp(1rem, -2.25rem + 16.25vw, 17.25rem);

  @media (max-width: ${mobileMaxBP}px) {
    gap: 6px;
    bottom: 8px;
    left: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 600;
  line-height: 120%;
  margin: 0;

  @media (max-width: ${mobileMaxBP}px) {
    font-size: 24px;
  }
`;

export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(
      90deg, 
      rgba(0,0,0,1) 13%, 
      rgba(0,0,0,0.9808298319327731) 14%, 
      rgba(0,0,0,0.9612219887955182) 15%, 
      rgba(0,0,0,0.865983893557423) 16%,
      rgba(0,0,0,0.23012955182072825) 22%, 
      rgba(0,0,0,0.05) 24%, 
      rgba(0,0,0,0) 25%
      ),
    linear-gradient(
      270deg, 
      rgba(0,0,0,1) 13%, 
      rgba(0,0,0,0.9808298319327731) 14%, 
      rgba(0,0,0,0.9612219887955182) 15%, 
      rgba(0,0,0,0.865983893557423) 16%, 
      rgba(0,0,0,0.23012955182072825) 22%, 
      rgba(0,0,0,0.05) 24%, 
      rgba(0,0,0,0) 25%
      ),
    linear-gradient(
      180deg, 
      rgba(0,0,0,1) 1%, 
      rgba(0,0,0,0.9808298319327731) 2%, 
      rgba(0,0,0,0.9612219887955182) 3%, 
      rgba(0,0,0,0.865983893557423) 4%, 
      rgba(0,0,0,0.23012955182072825) 5%, 
      rgba(0,0,0,0) 6%
      ),
    linear-gradient(
      4deg, 
      rgba(0,0,0,1) 2%, 
      rgba(0,0,0,0.9808298319327731) 4%, 
      rgba(0,0,0,0.9612219887955182) 6%, 
      rgba(0,0,0,0.865983893557423) 8%, 
      rgba(0,0,0,0.23012955182072825) 12%, 
      rgba(0,0,0,0) 15%
      );

  @media (max-width: ${mobileMaxBP}px) {
    background:
    linear-gradient(
      90deg, 
      rgba(0,0,0,1) 10%, 
      rgba(0,0,0,0.9808298319327731) 13%, 
      rgba(0,0,0,0.9612219887955182) 14%, 
      rgba(0,0,0,0.865983893557423) 16%,
      rgba(0,0,0,0.23012955182072825) 22%, 
      rgba(0,0,0,0.05) 24%, 
      rgba(0,0,0,0) 25%
      ),
    linear-gradient(
      270deg, 
      rgba(0,0,0,1) 13%, 
      rgba(0,0,0,0.9808298319327731) 14%, 
      rgba(0,0,0,0.9612219887955182) 15%, 
      rgba(0,0,0,0.865983893557423) 16%, 
      rgba(0,0,0,0.23012955182072825) 22%, 
      rgba(0,0,0,0.05) 24%, 
      rgba(0,0,0,0) 25%
      ),
    linear-gradient(
      180deg, 
      rgba(0,0,0,1) 1%, 
      rgba(0,0,0,0.9808298319327731) 2%, 
      rgba(0,0,0,0.9612219887955182) 3%, 
      rgba(0,0,0,0.865983893557423) 4%, 
      rgba(0,0,0,0.23012955182072825) 5%, 
      rgba(0,0,0,0) 6%
      ),
    linear-gradient(
      4deg, 
      rgba(0,0,0,1) 2%, 
      rgba(0,0,0,0.9808298319327731) 4%, 
      rgba(0,0,0,0.9612219887955182) 6%, 
      rgba(0,0,0,0.865983893557423) 8%, 
      rgba(0,0,0,0.23012955182072825) 12%, 
      rgba(0,0,0,0) 15%
      );
  }
 
`;

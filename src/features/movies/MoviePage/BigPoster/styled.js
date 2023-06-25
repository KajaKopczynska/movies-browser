import styled from "styled-components";

const largeBP = ({ theme }) => theme.breakpoints.large;
const mobileMaxBP = ({ theme }) => theme.breakpoints.mobileMax;

export const BackdropWrapper = styled.div`
  justify-content: center;
  animation: eclipse 0.75s ease-in-out;
  animation-fill-mode: forwards;

  @keyframes eclipse {
    100% {
      background-color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 1368px;
  margin: 0 auto;
  animation: reveal 2s ease-in-out 0.75s;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes reveal {
    100% {
      opacity: 1;
    }
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
`;

export const Info = styled.div`
  display: grid;
  gap: 25px;
  position: absolute;
  left: 40px;;
  bottom: 56px;
  max-width: 1368px;


  @media (max-width: ${largeBP}px) {
    left: 16px;
    gap: 10px;
    bottom: 16px;
  }

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
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);

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
      rgba(0,0,0,1) 3%, rgba(0,0,0,1) 4%, 
      rgba(0,0,0,0.6222864145658263) 9%, 
      rgba(0,0,0,0.1516981792717087) 13%, 
      rgba(0,0,0,0) 15%
      ),
    linear-gradient(
      270deg, 
      rgba(0,0,0,1) 3%, rgba(0,0,0,1) 4%, 
      rgba(0,0,0,0.6222864145658263) 9%, 
      rgba(0,0,0,0.1516981792717087) 13%, 
      rgba(0,0,0,0) 15%
      ),
    linear-gradient(
      180deg, 
      rgba(0,0,0,1) 1%, 
      rgba(0,0,0,0.6222864145658263) 3%, 
      rgba(0,0,0,0.1516981792717087) 6%, 
      rgba(0,0,0,0) 8%
      ),
    linear-gradient(
      4deg, 
      rgba(0,0,0,1) 4%, 
      rgba(0,0,0,0.7371323529411764) 8%, 
      rgba(0,0,0,0.6222864145658263) 10%, 
      rgba(0,0,0,0.258140756302521) 15%, 
      rgba(0,0,0,0.1516981792717087) 17%, 
      rgba(0,0,0,0) 21%
      );

  @media (max-width: ${mobileMaxBP}px) {
    background:
    linear-gradient(
      90deg, 
      rgba(0,0,0,1) 4%, 
      rgba(0,0,0,0.7371323529411764) 8%, 
      rgba(0,0,0,0.6222864145658263) 10%, 
      rgba(0,0,0,0.258140756302521) 15%, 
      rgba(0,0,0,0.1516981792717087) 17%, 
      rgba(0,0,0,0) 21%
      ),
    linear-gradient(
      270deg, 
      rgba(0,0,0,1) 4%, 
      rgba(0,0,0,0.7371323529411764) 8%, 
      rgba(0,0,0,0.6222864145658263) 10%, 
      rgba(0,0,0,0.258140756302521) 15%, 
      rgba(0,0,0,0.1516981792717087) 17%, 
      rgba(0,0,0,0) 21%
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
      rgba(0,0,0,1) 4%, 
      rgba(0,0,0,0.7371323529411764) 8%, 
      rgba(0,0,0,0.6222864145658263) 10%, 
      rgba(0,0,0,0.258140756302521) 15%, 
      rgba(0,0,0,0.1516981792717087) 17%, 
      rgba(0,0,0,0) 21%
      );
  }
`;

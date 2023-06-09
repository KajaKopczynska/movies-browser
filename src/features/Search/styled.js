import styled from "styled-components";
import { ReactComponent as IconSearch } from "./Search.svg";

const mobileBP = ({ theme }) => theme.breakpoints.mobileMax;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 32px;
`;

export const SearchIcon = styled(IconSearch)`
  margin: 10px 10px 10px 15px;
`;

export const SearchInput = styled.input`
  height: 44px;
  width: 100%;
  padding: 19px;
  border: 1px solid ${({ theme }) => theme.colors.mystic};
  border-left: none;
  border-radius: 0 33px 33px 0;

  &::placeholder {
    font-size: 16px;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: ${mobileBP}px) {
    height: 44px;
    width: 100%;
    padding: 10px;
  }
`;
import { SearchWrapper, SearchIcon, SearchInput } from "./styled";

export const Search = () => {

    return (
        <SearchWrapper>
            <SearchIcon />
            <SearchInput
                placeholder="Search for movies..."
            />
        </SearchWrapper>
    )
};
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useReplaceQueryParameter } from "../../useReplaceQueryParameter";
import { SearchWrapper, SearchIcon, SearchInput } from "./styled";
import useQueryParameter, { searchQueryParamName } from "../../useQueryParameter";
import { fetchSearchSuccess } from "./searchSlice";

export const Search = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim(),
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchSearchSuccess(query));
    };

    return (
        <SearchWrapper onSubmit={onFormSubmit}>
            <SearchIcon />
            <SearchInput
                placeholder={
                    location.pathname.includes("movies")
                        ? "Search for movies..."
                        : "Search for people..."
                }
                value={query || ""}
                onChange={onInputChange}
            />
        </SearchWrapper>
    );
};
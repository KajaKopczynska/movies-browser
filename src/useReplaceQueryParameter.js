import { useLocation, useNavigate } from "react-router-dom"
import { searchQueryParamName } from "./useQueryParameter";

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return ({ value }) => {
        const searchParams = new URLSearchParams();

        if (value === "") {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, value);
        }
        navigate(`${location.pathname}?${searchParams.toString()}`);
    };
};
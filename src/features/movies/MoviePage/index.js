import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { fetchMovieLoading, selectMovieStatus } from "./movieSlice";
import { Name } from "./styled";
import { Loading } from "../../../common/status/Loading";
import { Error } from "../../../common/status/Error";
import { searchQueryParamName } from "../../../useQueryParameter";

export const MoviePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const stateOfLoading = useSelector(selectMovieStatus);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const query = searchParams.get(searchQueryParamName);

    useEffect(() => {
        dispatch(fetchMovieLoading(id));
        if (query) {
            navigate(`/movies?${searchQueryParamName}=${query}`);
        }
    }, [dispatch, id, query, navigate]);

    return (
        <>
            {stateOfLoading === "loading" ? (
                <Loading />
            ) : stateOfLoading === "error" ? (
                <Error />
            ) : (
                <>
                    <Name>
                        TEST TEST TEST
                    </Name>
                </>
            )}
        </>
    );
};
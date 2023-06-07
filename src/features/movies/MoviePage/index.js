import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { fetchMovieLoading, selectMovieStatus } from "./movieSlice";
import { Loading } from "../../../common/status/Loading";
import { Error } from "../../../common/status/Error";
import { searchQueryParamName } from "../../../useQueryParameter";
import { BigPoster } from "./BigPoster";
import { MovieInfo } from "./MovieInfo";
import { MainContent } from "../../../common/MainContent";
import { Container } from "../../../common/Container";
import { Cast } from "./Cast";
import { Crew } from "./Crew";

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
                    <BigPoster />
                    <MainContent moviePage>
                        <Container>
                            <MovieInfo />
                            <Cast />
                            <Crew />
                        </Container>
                    </MainContent>
                </>
            )}
        </>
    );
};
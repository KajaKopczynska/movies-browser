import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMoviesLoading, selectMovies, selectTotalPages, selectStatus, selectTotalResults } from "../moviesSlice";
import { Container } from "../../../common/Container";
import { SectionTitle } from "../../../common/SectionTitle";
import { MovieList } from "./styled";
import { MovieTile } from "../MovieTile";
import { Pagination } from "../../../common/Pagination";
import { fetchGenres } from "../../../common/Genre/genreSlice";
import { useSearchParams } from "react-router-dom";
import { searchQueryParamName } from "../../../useQueryParameter";
import { Loading } from "../../../common/status/Loading";
import { MainContent } from "../../../common/MainContent";
import { Error } from "../../../common/status/Error";
import { NoResults } from "../../../common/status/NoResults";

const MoviesList = () => {
    const dispatch = useDispatch();

    const movies = useSelector(selectMovies);
    const totalPages = useSelector(selectTotalPages);
    const stateOfLoading = useSelector(selectStatus);
    const totalResults = useSelector(selectTotalResults);

    const [searchParams] = useSearchParams({ page: 1 });
    const page = Number(searchParams.get("page")) || 1;
    const query = searchParams.get(searchQueryParamName) || null;

    useEffect(() => {
        dispatch(fetchMoviesLoading({ page, query }));
        dispatch(fetchGenres());
    }, [dispatch, page, query]);

    return (
        <>
            {stateOfLoading === "loading" ? (
                <Loading />
            ) : stateOfLoading === "error" ? (
                <Error />
            ) : (
                <MainContent>
                    {!movies.length ? (
                        <NoResults query={query} />
                    ) : (
                        <>
                            <Container>
                                <section>
                                    <SectionTitle>
                                        {query
                                            ? `Search results for "${query}" (${totalResults})`
                                            : "Popular movies"
                                        }
                                    </SectionTitle>
                                    {movies && movies.length > 0 && (
                                        <MovieList>
                                            {movies.map(
                                                ({
                                                    id,
                                                    title,
                                                    poster_path,
                                                    vote_count,
                                                    vote_average,
                                                    release_date,
                                                    genre_ids,
                                                }) => (
                                                    <li key={id}>
                                                        <MovieTile
                                                            id={id}
                                                            title={title}
                                                            poster_path={poster_path}
                                                            vote_average={vote_average}
                                                            vote_count={vote_count}
                                                            release_date={release_date}
                                                            genre_ids={genre_ids}
                                                        />
                                                    </li>
                                                )
                                            )}
                                        </MovieList>
                                    )}
                                </section>
                            </Container>
                            <Pagination location="movies" totalPages={totalPages} />
                        </>
                    )}
                </MainContent>
            )}
        </>
    );
};

export default MoviesList;
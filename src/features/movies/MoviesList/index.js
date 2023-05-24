import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesLoading, selectMovies, selectStatus, selectTotalPages, selectTotalResults } from "../moviesSlice";
import { useEffect } from "react";
import { Container } from "../../../common/Container";
import { SectionTitle } from "../../../common/SectionTitle";
import { MovieList } from "./styled";
import { MovieTile } from "../MovieTile";

const MoviesList = () => {
    const dispatch = useDispatch();

    const movies = useSelector(selectMovies);
    // const stateOfLoading = useSelector(selectStatus);
    // const totalPages = useSelector(selectTotalPages);
    // const totalResults = useSelector(selectTotalResults);

    const searchParams = new URLSearchParams(window.location.search);
    const page = Number(searchParams.get("page")) || 1;

    useEffect(() => {
        dispatch(fetchMoviesLoading({ page }));

    }, [dispatch, page]);

    return (
        <>
            <Container>
                <section>
                    <SectionTitle>
                        Popular movies
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
                                    //   genre_ids,
                                }) => (
                                    <li key={id}>
                                        {/* <StyledLink to={`/movies/${id}`}> */}
                                        <MovieTile
                                            id={id}
                                            title={title}
                                            poster_path={poster_path}
                                            vote_average={vote_average}
                                            vote_count={vote_count}
                                            release_date={release_date}
                                        // genre_ids={genre_ids}
                                        />
                                        {/* </StyledLink> */}
                                    </li>
                                )
                            )}
                        </MovieList>
                    )}
                </section>
            </Container>
        </>

    );
};

export default MoviesList;
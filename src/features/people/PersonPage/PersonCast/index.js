import { useSelector } from "react-redux";
import { selectPersonCast } from "../personSlice";
import { Container } from "../../../../common/Container";
import { SectionTitle } from "../../../../common/SectionTitle";
import { MovieTile } from "../../../movies/MovieTile";
import { MoviesList } from "./styled";

export const PersonCast = () => {
    const cast = useSelector(selectPersonCast);

    return (
        <Container>
            <SectionTitle>
                Movies - cast {"("}{cast.length}{")"}
            </SectionTitle>
            {cast && cast.length > 0 && (
                <MoviesList>
                    {cast.map(({
                        credit_id,
                        id,
                        title,
                        poster_path,
                        release_date,
                        vote_average,
                        vote_count,
                        genre_ids,
                    }) => (
                        <li key={credit_id}>
                            <MovieTile
                            id={id}
                            title={title}
                            poster_path={poster_path}
                            release_date={release_date}
                            vote_average={vote_average}
                            vote_count={vote_count}
                            genre_ids={genre_ids}
                            />
                        </li>
                    ))}
                </MoviesList>
            )}
        </Container>
    );
};
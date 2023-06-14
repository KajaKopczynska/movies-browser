import { useSelector } from "react-redux";
import { selectPersonCrew } from "../personSlice";
import { Container } from "../../../../common/Container";
import { SectionTitle } from "../../../../common/SectionTitle";
import { MoviesList } from "./styled";
import { MovieTile } from "../../../movies/MovieTile";

export const PersonCrew = () => {
    const crew = useSelector(selectPersonCrew);

    return (
        <Container>
            <SectionTitle>
                Movies - crew {"("}{crew.length}{")"}
            </SectionTitle>
            {crew && crew.length > 0 && (
                <MoviesList>
                    {crew.map(({
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
import { useSelector } from "react-redux";
import { selectMovieCast } from "../movieSlice";
import { Container } from "../../../../common/Container";
import { SectionTitle } from "../../../../common/SectionTitle";
import {PersonTile} from "../../../people/PersonTile";
import { PeopleList } from "./styled";

export const Cast = () => {
    const cast = useSelector(selectMovieCast);

    return (
        <Container>
            <SectionTitle>
                Cast
            </SectionTitle>
            {cast && cast.length > 0 && (
                <PeopleList>
                    {cast.map(({
                        cast_id,
                        id,
                        profile_path,
                        name,
                        character
                    }) => (
                        <li key={cast_id}>
                            <PersonTile
                            id={id}
                            profile_path={profile_path}
                            name={name}
                            character={character}
                            />
                        </li>
                    ))}
                </PeopleList>
            )}
        </Container>
    );
};
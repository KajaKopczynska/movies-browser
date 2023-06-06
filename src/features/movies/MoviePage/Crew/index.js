import { useSelector } from "react-redux";
import { selectMovieCrew } from "../movieSlice";
import { Container } from "../../../../common/Container";
import { SectionTitle } from "../../../../common/SectionTitle";
import { PersonTile } from "../../../people/PersonTile";
import { PeopleList } from "./styled";

export const Crew = () => {
    const crew = useSelector(selectMovieCrew);

    return (
        <Container>
            <SectionTitle>
                Crew
            </SectionTitle>
            {crew && crew.length > 0 && (
                <PeopleList>
                    {crew.map(({
                        credit_id,
                        id,
                        profile_path,
                        name,
                        job
                    }) => (
                        <li key={credit_id}>
                            <PersonTile
                                id={id}
                                profile_path={profile_path}
                                name={name}
                                job={job}
                            />
                        </li>
                    ))}
                </PeopleList>
            )}
        </Container>
    );
};
import { imagesBaseUrl } from "../../../moviesBrowserApi";
import noPhoto from "./Images/noPhoto.png";
import { Image, TileWrapper, Title, Subtitle } from "./styled";

export const PersonTile = ({
    id,
    profile_path,
    name,
    character,
    job,
}) => {
    return (
        <TileWrapper to={`/people/${id}`}>
            <Image
                src={profile_path ? `${imagesBaseUrl}/w342${profile_path}` : noPhoto}
                alt=""
            />
            {name && <Title>{name}</Title>}
            {character && <Subtitle>{character}</Subtitle>}
            {job && <Subtitle>{job}</Subtitle>}
        </TileWrapper>
    );
};
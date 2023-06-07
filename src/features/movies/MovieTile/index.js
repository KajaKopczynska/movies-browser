import { TileWrapper, Image, Description, Title, Subtitle } from "./styled";
import { Genre } from "../../../common/Genre";
import { imagesBaseUrl } from "../../../moviesBrowserApi";
import noPoster from "./Images/noPoster.png";
import { Rating } from "../../../common/Rating";

export const MovieTile = ({
    id,
    title,
    poster_path,
    release_date,
    vote_average,
    vote_count,
    genre_ids,
}) => {

    return (
        <TileWrapper to={`/movies/${id}`}>
            <Image
                src={poster_path ? `${imagesBaseUrl}/w500${poster_path}` : noPoster}
                alt=""
            />
            <Description>
                {title && <Title>{title}</Title>}
                {release_date && (<Subtitle>{new Date(release_date).getFullYear()}</Subtitle>)}
                {genre_ids && <Genre genre_ids={genre_ids} />}
                {vote_average && vote_count ? (
                    <Rating
                        location="movieTile"
                        voteAverage={vote_average.toFixed(1)}
                        voteCount={vote_count} />
                ) : (
                    <Rating
                        location="movieTile"
                        voteAverage="0"
                        voteCount="0 votes" />
                )}
            </Description>
        </TileWrapper>
    );
};
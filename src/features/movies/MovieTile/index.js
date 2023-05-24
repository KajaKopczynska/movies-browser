import { TileWrapper, Image, Description, Title, Subtitle, Tags, Tag, RatingWrapper, Star, Rate, Votes } from "./styled";
import { imagesBaseUrl } from "../../../moviesBrowserApi";
import noPoster from "./Images/noPoster.png";

export const MovieTile = ({
    id,
    title,
    poster_path,
    release_date,
    vote_average,
    vote_count,
}) => {

    return (
        <TileWrapper key={id} id={id}>
            <Image
                src={poster_path ? `${imagesBaseUrl}/w500${poster_path}` : noPoster}
                alt=""
            />
            <Description>
                {title && <Title>{title}</Title>}
                {release_date && (<Subtitle>{new Date(release_date).getFullYear()}</Subtitle>)}
                <Tags>
                    <Tag>Action</Tag>
                    <Tag>Adventure</Tag>
                    <Tag>Action</Tag>
                </Tags>
                {vote_average && vote_count ? (
                    <RatingWrapper>
                        <Star />
                        <Rate>{vote_average}</Rate>
                        <Votes>{vote_count} votes</Votes>
                    </RatingWrapper>
                ) : (
                    <RatingWrapper>
                    <Star />
                    <Rate>0</Rate>
                    <Votes>0 votes</Votes>
                    </RatingWrapper>
                )}
            </Description>
        </TileWrapper>
    );
};
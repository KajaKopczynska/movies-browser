import { TileWrapper, Image, Description, Title, Subtitle, Tags, Tag, RatingWrapper, Star, Rate, Votes } from "./styled";
import { imagesBaseUrl } from "../../../moviesBrowserApi";
import noPoster from "./Images/noPoster.png";

export const MovieTile = ({
    id,
    title,
    poster_path,
}) => {

    return (
        <TileWrapper key={id} id={id}>
            <Image
                src={poster_path ? `${imagesBaseUrl}/w500${poster_path}` : noPoster} 
                alt=""
            />
            <Description>
                {title && <Title>{title}</Title>}
                <Subtitle>
                    2020
                </Subtitle>
                <Tags>
                    <Tag>Action</Tag>
                    <Tag>Adventure</Tag>
                    <Tag>Action</Tag>
                </Tags>
                <RatingWrapper>
                    <Star />
                    <Rate>
                        7,8
                    </Rate>
                    <Votes>
                        35 votes
                    </Votes>
                </RatingWrapper>
            </Description>
        </TileWrapper>
    );
};
import poster from "./Images/poster.png";
import { TileWrapper, Image, Description, Title, Subtitle, Tags, Tag, RatingWrapper, Star, Rate, Votes } from "./styled";

export const MovieTile = () => {

    return (
        <TileWrapper>
            <Image
                src={poster} alt=""
            />
            <Description>
                <Title>
                    Mulan
                </Title>
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
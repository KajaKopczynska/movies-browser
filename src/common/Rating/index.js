import { MaxRate, Rate, RatingSection, RatingWrapper, Star, Votes } from "./styled";

export const Rating = ({ location, voteAverage, voteCount }) => (
    <RatingWrapper location={location}>
        <RatingSection>
            <Star location={location} />
            <Rate location={location}>{voteAverage}</Rate>
            <MaxRate location={location}>/ 10</MaxRate>
        </RatingSection>
        <Votes location={location}>{voteCount} votes</Votes>
    </RatingWrapper>
);

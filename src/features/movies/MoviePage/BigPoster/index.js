import { useSelector } from "react-redux";
import { imagesBaseUrl } from "../../../../moviesBrowserApi";
import { selectMovie } from "../movieSlice";
import { Gradient, Info, Poster, Title, Wrapper } from "./styled";
import { Rating } from "../../../../common/Rating";

export const BigPoster = () => {
    const movieInfo = useSelector(selectMovie);

    return (
        <>
            {movieInfo.backdrop_path && (
                <Wrapper>
                    <Gradient />
                    <div>
                        <Poster
                            src={`${imagesBaseUrl}/w1280/${movieInfo.backdrop_path}`}
                            alt=""
                        />
                    </div>
                    <Info>
                        <Title>{movieInfo.original_title}</Title>
                        <Rating
                            location="backgroundPoster"
                            voteAverage={movieInfo.vote_average.toFixed(1)}
                            voteCount={movieInfo.vote_count} />
                    </Info>
                </Wrapper>
            )}
        </>
    );
};
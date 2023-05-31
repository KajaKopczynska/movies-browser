import { useSelector } from "react-redux";
import { imagesBaseUrl } from "../../../../moviesBrowserApi";
import { selectMovie } from "../movieSlice";
import { Gradient, Info, Poster, Title, Wrapper } from "./styled";

export const BigPoster = () => {
    const movieInfo = useSelector(selectMovie);

    return (
        <>
            {movieInfo.backdrop_path && (
                <Wrapper>
                    <Gradient />
                    <Poster
                        src={`${imagesBaseUrl}/w1280/${movieInfo.backdrop_path}`}
                        alt=""
                    />
                    <Info>
                        <Title>{movieInfo.original_title}</Title>
                    </Info>
                </Wrapper>
            )}
        </>
    );
};
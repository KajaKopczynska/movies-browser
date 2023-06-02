import { Image, Description as Information, Title, Subtitle, MovieInfoWrapper, CountryName, CountryNameShort, Label, Details, Description } from "./styled";
import { format } from 'date-fns';
import { Genre } from "../../../../common/Genre"; // do zmiany
import { imagesBaseUrl } from "../../../../moviesBrowserApi";
import noPoster from "./noPoster.png";
import { Rating } from "../../../../common/Rating";
import { useSelector } from "react-redux";
import { selectMovie } from "../movieSlice";

export const MovieInfo = ({
    id,
    title,
    poster_path,
    release_date,
    vote_average,
    vote_count,
    genre_ids,
}) => {
    const movieInfo = useSelector(selectMovie);

    const releaseDate = new Date(movieInfo.release_date);
    const formattedDate = format(releaseDate, 'dd.MM.yyyy');

    return (
        <MovieInfoWrapper>
            <Image
                src={movieInfo.poster_path ? `${imagesBaseUrl}/w500${movieInfo.poster_path}` : noPoster}
                alt=""
            />
<div>
<Information>
                {movieInfo.title && <Title >{movieInfo.title}</Title>}
                {movieInfo.release_date && (<Subtitle>{new Date(movieInfo.release_date).getFullYear()}</Subtitle>)}
                <Details>
                    {movieInfo.production_countries && (
                        <div>
                            <Label>Production:</Label>
                            <CountryName>
                                {movieInfo.production_countries.map((country) => country.name).join(", ")}
                            </CountryName>
                            <CountryNameShort>
                                {movieInfo.production_countries.map((country) => country.iso_3166_1).join(", ")}
                            </CountryNameShort>
                        </div>
                    )}
                    {movieInfo.release_date && (
                        <div>
                            <Label>Release date:</Label>
                            {formattedDate}
                        </div>
                    )}
                </Details>




                {movieInfo.genre_ids && <Genre genre_ids={movieInfo.genre_ids} />}
                {movieInfo.vote_average && movieInfo.vote_count ? (
                    <Rating
                        location="movieInfo"
                        voteAverage={movieInfo.vote_average.toFixed(1)}
                        voteCount={movieInfo.vote_count} />
                ) : (
                    <Rating
                        location="movieInfo"
                        voteAverage="0"
                        voteCount="0 votes" />
                )}
            </Information>
</div>
            <Description>{movieInfo.overview}</Description>
        </MovieInfoWrapper>
    );
};
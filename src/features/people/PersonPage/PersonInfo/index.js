import { useSelector } from "react-redux";
import { selectPerson } from "../personSlice";
import noPhoto from "./noPhoto.png";
import { Image, Information, PersonInfoWrapper, Title } from "./styled";
import { imagesBaseUrl } from "../../../../moviesBrowserApi";

import { selectMovie } from "../../../movies/MoviePage/movieSlice";

export const PersonInfo = () => {
    const personInfo = useSelector(selectPerson);
    const movieInfo = useSelector(selectMovie);

    return (
        <PersonInfoWrapper>
            <Image
                src={personInfo.profile_path ? `${imagesBaseUrl}/w342${personInfo.profile_path}` : noPhoto}
                alt=""
            />
            <div>
                <Information>
                    {personInfo.name && <Title >{personInfo.name}</Title>}
                </Information>
            </div>



        </PersonInfoWrapper>
    );
};
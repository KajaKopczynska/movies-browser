import { useSelector } from "react-redux";
import { selectPerson } from "../personSlice";
import noPhoto from "./noPhoto.png";
import { Description, Details, Image, Information, Label, PersonInfoWrapper, Title } from "./styled";
import { imagesBaseUrl } from "../../../../moviesBrowserApi";
import { format } from 'date-fns';


export const PersonInfo = () => {
    const personInfo = useSelector(selectPerson);

    const birthdayDate = new Date(personInfo.birthday);
    const formattedDate = format(birthdayDate, 'dd.MM.yyyy');

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
                <Details>
                    {personInfo.birthday && (
                        <div>
                            <Label>Date of birth:</Label>
                            {formattedDate}
                        </div>
                    )}
                    {personInfo.place_of_birth && (
                        <div>
                            <Label>Place of birth:</Label>
                            {personInfo.place_of_birth}
                        </div>
                    )}
                </Details>
            </div>
            <Description>{personInfo.biography}</Description>
        </PersonInfoWrapper>
    );
};
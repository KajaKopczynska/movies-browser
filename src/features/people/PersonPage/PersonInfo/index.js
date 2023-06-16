import { useSelector } from "react-redux";
import { selectPerson } from "../personSlice";
import noPhoto from "./noPhoto.png";
import { Description, Details, Image, Information, Label, LabelShort, LabelWrapper, PersonInfoWrapper, Title, ValueLabel } from "./styled";
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
                            <LabelShort>Birth:</LabelShort>
                            {formattedDate}
                        </div>
                    )}
                    {personInfo.place_of_birth && (
                        <LabelWrapper>
                            <Label>Place of birth:</Label>
                            <LabelShort>Place of birth:</LabelShort>
                            <ValueLabel>{personInfo.place_of_birth}</ValueLabel>
                        </LabelWrapper>
                    )}
                </Details>
            </div>
            <Description>{personInfo.biography}</Description>
        </PersonInfoWrapper>
    );
};
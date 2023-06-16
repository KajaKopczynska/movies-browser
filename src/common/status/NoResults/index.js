import { SectionTitle } from "../../SectionTitle";
import { NoResultsImage, Wrapper } from "./styled";

export const NoResults = ({ query }) => {
    return (
        <Wrapper>
            <SectionTitle>Sorry, there are no results for "{query}"</SectionTitle>
            <NoResultsImage />
        </Wrapper>
    );
};
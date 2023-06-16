import { useSearchParams } from "react-router-dom";
import { MainContent } from "../../MainContent";
import { Wrapper, LoadingAnimation } from "./styled";
import { searchQueryParamName } from "../../../useQueryParameter";
import { SectionTitle } from "../../SectionTitle";

export const Loading = () => {
    const [searchParams] = useSearchParams({ [searchQueryParamName]: "" });
    const query = searchParams.get(searchQueryParamName) || null;

    const content = query ? `Search results for "${query}"` : null;

    return (
        <>
            <MainContent>
                <Wrapper>
                    <SectionTitle>{content}</SectionTitle>
                    <LoadingAnimation />
                </Wrapper>
            </MainContent>
        </>
    );
};
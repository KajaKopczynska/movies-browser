import { MainContent } from "../../MainContent";
import { Wrapper, LoadingAnimation } from "./styled";

export const Loading = () => {
    // const content = query ? `Search results for "${query}"` : null;

    return (
        <>
            <MainContent>
                <Wrapper>
                    {/* <Header></Header> */}
                    <LoadingAnimation />
                </Wrapper>
            </MainContent>
        </>
    );
};
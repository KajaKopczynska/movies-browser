import { Wrapper, LoadingAnimation } from "./styled";

export const Loading = () => {
    // const content = query ? `Search results for "${query}"` : null;

    return (
        <>
            <Wrapper>
                {/* <Header></Header> */}
                <LoadingAnimation />
            </Wrapper>
        </>
    );
};
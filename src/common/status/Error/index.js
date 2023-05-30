import { Button, Content, DangerIcon, Header, Wrapper } from "./styled";

export const Error = () => {
    return (
        <Wrapper>
            <DangerIcon />
            <Header>
                Ooops! Something went wrong...
            </Header>
            <Content>
                Please check your network connection<br />
                and try again
            </Content>
            <Button to="/">Back to home page</Button>
        </Wrapper>
    )
};
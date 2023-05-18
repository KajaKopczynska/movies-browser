import { StyledHeader, Wrapper, LinksWrapper, TitleLink, StyledVideoIcon, TittleText, Navigation, StyledNavLink } from "./styled";

const Header = () => {

    return (
        <StyledHeader>
            <Wrapper>
                <LinksWrapper>
                    <TitleLink to="/movies">
                        <StyledVideoIcon />
                        <TittleText>Movies Browser</TittleText>
                    </TitleLink>
                    <nav>
                        <Navigation>
                            <li>
                                <StyledNavLink>MOVIES</StyledNavLink>
                            </li>
                            <li>
                                <StyledNavLink>PEOPLE</StyledNavLink>
                            </li>
                        </Navigation>
                    </nav>
                </LinksWrapper>
                {/* <Search /> */}
            </Wrapper>
        </StyledHeader>
    );
};

export default Header;
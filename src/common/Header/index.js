import { StyledHeader, Wrapper, LinksWrapper, TitleLink, StyledVideoIcon, TittleText, Navigation, StyledNavLink } from "./styled";
import { Search } from "../../features/Search";

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
                                <StyledNavLink to="/movies">MOVIES</StyledNavLink>
                            </li>
                            <li>
                                <StyledNavLink>PEOPLE</StyledNavLink>
                            </li>
                        </Navigation>
                    </nav>
                </LinksWrapper>
                <Search />
            </Wrapper>
        </StyledHeader>
    );
};

export default Header;
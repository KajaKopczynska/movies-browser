import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPeopleLoading, selectPeople, selectTotalPages, selectStatus, selectTotalResults } from "../peopleSlice";
import { Container } from "../../../common/Container";
import { SectionTitle } from "../../../common/SectionTitle";
import { MovieList, StyledLink } from "./styled";
import { PersonTile } from "../PersonTile";
import { Pagination } from "../../../common/Pagination";
import { useSearchParams } from "react-router-dom";
import { searchQueryParamName } from "../../../useQueryParameter";
import { Loading } from "../../../common/status/Loading";
import { MainContent } from "../../../common/MainContent";
import { Error } from "../../../common/status/Error";


const PeopleList = () => {
    const dispatch = useDispatch();

    const people = useSelector(selectPeople);
    const totalPages = useSelector(selectTotalPages);
    const stateOfLoading = useSelector(selectStatus);
    const totalResults = useSelector(selectTotalResults);

    const [searchParams] = useSearchParams({ page: 1 });
    const page = Number(searchParams.get("page")) || 1;
    const query = searchParams.get(searchQueryParamName) || null;

    useEffect(() => {
        dispatch(fetchPeopleLoading({ page, query }));
    }, [dispatch, page, query]);

    return (
        <>
            {stateOfLoading === "loading" ? (
                <Loading />
            ) : stateOfLoading === "error" ? (
                <Error />
            ) : (
                <MainContent>
                    <>
                        <Container>
                            <section>
                                <SectionTitle>
                                    {query
                                        ? `Search results for "${query}" (${totalResults})`
                                        : "Popular people"
                                    }
                                </SectionTitle>
                                {people && people.length > 0 && (
                                    <MovieList>
                                        {people.map(
                                            ({
                                                id,
                                                profile_path,
                                                name,
                                            }) => (
                                                <li key={id}>
                                                    <PersonTile
                                                        id={id}
                                                        profile_path={profile_path}
                                                        name={name}
                                                    />
                                                </li>
                                            )
                                        )}
                                    </MovieList>
                                )}
                            </section>
                        </Container>
                        <Pagination location="people" totalPages={totalPages} />
                    </>
                </MainContent>
            )}
        </>
    );
};

export default PeopleList;
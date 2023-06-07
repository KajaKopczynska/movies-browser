import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { fetchPersonLoading, selectPerson, selectPersonCast, selectPersonCrew, selectPersonStatus } from "./personSlice";
import { Loading } from "../../../common/status/Loading";
import { Error } from "../../../common/status/Error";
import { searchQueryParamName } from "../../../useQueryParameter";
import { PersonInfo } from "./PersonInfo";
import { MainContent } from "../../../common/MainContent";
import { Container } from "../../../common/Container";

export const PersonPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const stateOfLoading = useSelector(selectPersonStatus);
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const query = searchParams.get(searchQueryParamName);

    const person = useSelector(selectPerson);
    const cast = useSelector(selectPersonCast);
    const crew = useSelector(selectPersonCrew);

    useEffect(() => {
        dispatch(fetchPersonLoading(id));
        if (query) {
            navigate(`/people?${searchQueryParamName}=${query}`);
        }
    }, [dispatch, id, query, navigate]);

    return (
        <>
            {stateOfLoading === "loading" ? (
                <Loading />
            ) : stateOfLoading === "error" ? (
                <Error />
            ) : (
                <>
                    <MainContent>
                        <Container>
                            <PersonInfo />
                        </Container>
                    </MainContent>
                </>
            )}
        </>
    );
};
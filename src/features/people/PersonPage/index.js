import { useDispatch, useSelector } from "react-redux";
import { fetchPersonLoading, selectPerson, selectPersonCast, selectPersonCrew, selectPersonStatus } from "./personSlice";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { searchQueryParamName } from "../../../useQueryParameter";
import { useEffect } from "react";
import { Loading } from "../../../common/status/Loading";
import { Error } from "../../../common/status/Error";
import { Container } from "../../../common/Container";
import { MainContent } from "../../../common/MainContent";

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
                            TEST TEST TEST
                            {/* <PersonInfo /> */}
                        </Container>
                    </MainContent>
                </>
            )}
        </>
    );
};
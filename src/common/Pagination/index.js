import { useSearchParams } from "react-router-dom";
import { Wrapper, Button, ArrowIconLeft, ButtonText, PageCounter, PageNumbers, ArrowIconRight } from "./styled";
import { searchQueryParamName } from "../../useQueryParameter";

export const Pagination = ({ location, totalPages }) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;
    const query = searchParams.get(searchQueryParamName);
    const maxPage = 500;
    const totalPage = totalPages > maxPage ? maxPage : totalPages;

    const onGoToFirst = () => {
        if (currentPage !== 1) {
            query
                ? setSearchParams({ [searchQueryParamName]: query, page: 1 })
                : setSearchParams({ page: 1 });
        }
    };

    const onGoToPrevious = () => {
        if (currentPage !== 1) {
            const previousPage = currentPage - 1;
            query
                ? setSearchParams({ [searchQueryParamName]: query, page: previousPage })
                : setSearchParams({ page: previousPage });
        }
    };

    const onGoToNext = () => {
        if (currentPage !== totalPages) {
            const nextPage = currentPage + 1;
            query
                ? setSearchParams({ [searchQueryParamName]: query, page: nextPage })
                : setSearchParams({ page: nextPage });
        }
    };

    const onGoToLast = () => {
        if (currentPage !== totalPage) {
            query
                ? setSearchParams({ [searchQueryParamName]: query, page: totalPage })
                : setSearchParams({ page: totalPage });
        }
    };

    return (
        <Wrapper location={location}>
            <Button disabled={currentPage <= 1} onClick={onGoToFirst}>
                <ArrowIconLeft />
                <ArrowIconLeft mobile="true" />
                <ButtonText>First</ButtonText>
            </Button>
            <Button disabled={currentPage <= 1} onClick={onGoToPrevious}>
                <ArrowIconLeft />
                <ButtonText>Previous</ButtonText>
            </Button>
            <PageCounter>
                Page
                <PageNumbers>{currentPage}</PageNumbers>
                of
                <PageNumbers>{totalPage}</PageNumbers>
            </PageCounter>
            <Button disabled={currentPage >= totalPages || currentPage === maxPage} onClick={onGoToNext}>
                <ButtonText>Next</ButtonText>
                <ArrowIconRight />
            </Button>
            <Button disabled={currentPage >= totalPages || currentPage === maxPage} onClick={onGoToLast}>
                <ButtonText>Last</ButtonText>
                <ArrowIconRight />
                <ArrowIconRight mobile="true" />
            </Button>
        </Wrapper>
    );
};
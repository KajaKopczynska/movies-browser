import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        status: "loading",
        people: [],
        totalPages: 0,
        totalResults: 0,
    },
    reducers: {
        fetchPeopleLoading: (state) => {
            state.status = "loading";
        },
        fetchPeopleError: (state) => {
            state.status = "error";
        },
        fetchPeopleSuccess: (state, { payload: people }) => {
            state.status = "success";
            state.people = people.results;
            state.totalPages = people.total_pages;
            state.totalResults = people.total_results;
        },
    },
});

export const {
    fetchPeopleLoading,
    fetchPeopleError,
    fetchPeopleSuccess,
} = peopleSlice.actions;

const selectPeopleState = (state) => state.people;

export const selectPeople = (state) => selectPeopleState(state).people;
export const selectStatus = (state) => selectPeopleState(state).status;
export const selectTotalPages = (state) => selectPeopleState(state).totalPages;
export const selectTotalResults = (state) => selectPeopleState(state).totalResults;

export default peopleSlice.reducer;
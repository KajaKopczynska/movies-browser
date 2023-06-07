import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
    name: "person",
    initialState: {
        status: "loading",
        person: [],
        cast: [],
        crew: [],
    },
    reducers: {
        fetchPersonLoading: () => ({
            status: "loading",
            person: [],
            cast: [],
            crew: [],
        }),
        fetchPersonError: () => ({
            status: "error",
            person: [],
            cast: [],
            crew: [],
        }),
        fetchPersonSuccess: (_, { payload: { person, details } }) => ({
            status: "success",
            person: details,
            cast: person.cast,
            crew: person.crew,
        }),
    },
});

export const {
    fetchPersonLoading,
    fetchPersonError,
    fetchPersonSuccess,
} = personSlice.actions;

const selectPersonState = (state) => state.person;

export const selectPerson = (state) => selectPersonState(state).person;
export const selectPersonStatus = (state) => selectPersonState(state).status;
export const selectPersonCast = (state) => selectPersonState(state).cast;
export const selectPersonCrew = (state) => selectPersonState(state).crew;

export default personSlice.reducer;
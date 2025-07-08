import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchNotesApi, postNotesApi } from "./notesApi";

export const postNotesSlice = createAsyncThunk("notes/post",async({title,desc,userId})=>{

    const notes = await postNotesApi({title,desc,userId});
    return notes;
})

export const fetchNoteData = createAsyncThunk("fetch/post",async(userId)=>{

    const notesData = await fetchNotesApi(userId);
    return notesData;
})

const NotesSlice = createSlice({
    name: "notes",
    initialState: {
        notes: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
         .addCase(postNotesSlice.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(postNotesSlice.fulfilled, (state, action) => {
             
                state.notes.push(action.payload);
            })
            .addCase(postNotesSlice.rejected, (state, action) => {
               
                state.error = action.payload || "Failed to fetch orders.";
            })
             .addCase(fetchNoteData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNoteData.fulfilled, (state, action) => {
             
                state.notes=action.payload;
            })
            .addCase(fetchNoteData.rejected, (state, action) => {
               
                state.error = action.payload || "Failed to fetch orders.";
            })
           
           
    },
});

export default NotesSlice.reducer;

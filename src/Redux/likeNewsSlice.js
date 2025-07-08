import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteLikeNewsApi, fetchLikeNewsApi, postLikeNewsApi } from "./likeNewsApi";

export const postLikeNewsSlice = createAsyncThunk("like/post",async(likeData)=>{

    const news = await postLikeNewsApi(likeData);
    return news;
})
export const fetchLikeNewsSlice = createAsyncThunk("like/fetch",async(user_id)=>{

    const news = await fetchLikeNewsApi(user_id);
    return news;
})

export const deleteLikeNewsSlice = createAsyncThunk("like/delete",async (id) => {
    const deleted = await deleteLikeNewsApi(id);
    return id;
  }
);

const likeSectionSlice = createSlice({
    name: "news",
    initialState: {
        news: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
         .addCase(postLikeNewsSlice.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(postLikeNewsSlice.fulfilled, (state, action) => {
             
                state.news.push(action.payload);
            })
            .addCase(postLikeNewsSlice.rejected, (state, action) => {
               
                state.error = action.payload || "Failed to fetch orders.";
            })
              .addCase(fetchLikeNewsSlice.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLikeNewsSlice.fulfilled, (state, action) => {
             
                state.news=action.payload
            })
            .addCase(fetchLikeNewsSlice.rejected, (state, action) => {
               
                state.error = action.payload || "Failed to fetch orders.";
            })
           .addCase(deleteLikeNewsSlice.fulfilled, (state, action) => {
  // Remove deleted news from Redux state using the returned ID
  state.news = state.news.filter(item => item.id !== action.payload);
})
           
    },
});

export default likeSectionSlice.reducer;

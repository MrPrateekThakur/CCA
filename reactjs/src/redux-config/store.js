// // store.js
// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
// import url from '../URL/url';

// const store = createSlice({
//     name: 'FormData',
//     initialState: {
//         teamName: '',   
//         totalPlayers: '',
//         batsmen: '',
//         bowlers: '',
//         allRounders: '',
//         wicketKeepers: '',
//     },
//     reducers: {
//         addTeam: (state, action) => {
//             axios.post(url.team.register, state)
//                 .then()
//                 .catch();
//         }
//     }
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice.js";
import SubCategorySlice from "./SubCategorySlice.js";

const store = configureStore({
    reducer: {
        Category: CategorySlice,
        SubCategory: SubCategorySlice 
    }
});

export default store;
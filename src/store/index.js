import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialScores = [
    { username: 'Player1', time: '01:23:456' },
    { username: 'Player2', time: '01:45:678' },
    { username: 'Player3', time: '02:00:123' },
    { username: 'Player4', time: '02:15:234' },
    { username: 'Player5', time: '02:30:345' },
    { username: 'Player6', time: '02:45:456' },
    { username: 'Player7', time: '03:00:567' },
    { username: 'Player8', time: '03:15:678' },
    { username: 'Player9', time: '03:30:789' },
    { username: 'Janvi Is Here', time: '03:45:890' },
];

const scoresSlice = createSlice({
  name: 'scores',
  initialState: initialScores,
  reducers: {
    addScore: (state, action) => {
      state.push(action.payload);
      state.sort((a, b) => (a.time > b.time ? 1 : -1));
      if (state.length > 10) state.shift();
    },
  },
});

export const { addScore } = scoresSlice.actions;

const store = configureStore({
  reducer: {
    scores: scoresSlice.reducer,
  },
});

export default store;

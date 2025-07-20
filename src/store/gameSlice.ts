import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  matches: number;
  mistakes: number;
  timer: number;
  timerVersion: number;
  timerSetting: number;
  username: string;
}

const initialState: GameState = {
  matches: 0,
  mistakes: 0,
  timer: 60,
  timerVersion: 0,
  timerSetting: 60,
  username: 'Player',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    incrementMatches: (state) => {
      state.matches += 1;
    },
    incrementMistakes: (state) => {
      state.mistakes += 1;
    },
    resetGame: (state) => {
      state.matches = 0;
      state.mistakes = 0;
      state.timer = state.timerSetting;
      state.timerVersion = 0;
    },
    timer: (state) => {
      state.timer = 60;
    },
    timerSetting: (state) => {
      state.timerSetting = 60;
    },
    setStoreTimer: (state, action: PayloadAction<number>) => {
      state.timer = action.payload;
      state.timerVersion += 1;
    },
    setTimersetting: (state, action: PayloadAction<number>) => {
      state.timer = action.payload;
      state.timerSetting = action.payload;
    },
    username: (state) => {
      state.username = 'Player';
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

export const {
  incrementMatches,
  incrementMistakes,
  resetGame,
  timer,
  timerSetting,
  setStoreTimer,
  setTimersetting,
  username,
  setUsername,
} = gameSlice.actions;
export default gameSlice.reducer;

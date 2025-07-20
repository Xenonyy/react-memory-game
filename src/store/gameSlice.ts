import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  matches: number;
  mistakes: number;
  timer: number;
  timerVersion: number;
}

const initialState: GameState = {
  matches: 0,
  mistakes: 0,
  timer: 60,
  timerVersion: 0,
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
    },
    timer: (state) => {
      state.timer = 60;
    },
    setStoreTimer: (state, action: PayloadAction<number>) => {
      state.timer = action.payload;
      state.timerVersion += 1;
    },
  },
});

export const { incrementMatches, incrementMistakes, resetGame, timer, setStoreTimer } = gameSlice.actions;
export default gameSlice.reducer;

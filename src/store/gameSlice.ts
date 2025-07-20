import { createSlice } from '@reduxjs/toolkit';

interface GameState {
  matches: number;
  mistakes: number;
}

const initialState: GameState = {
  matches: 0,
  mistakes: 0,
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
  },
});

export const { incrementMatches, incrementMistakes, resetGame } = gameSlice.actions;
export default gameSlice.reducer;

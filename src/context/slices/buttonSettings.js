import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  sizes: {
    width: 150,
    height: 50
  },
  radius: {
    top: 8,
    right: 8,
    bottom: 8,
    left: 8
  },
  colors: {
    bg: '#07020dbf',
    c1: '#790e8b',
    c2: ''
  },
  border: {
    type: 'none',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }

}

export const slice = createSlice({
  name: 'buttonSettings',
  initialState,
  reducers: {
    setSizes: (state, action) => {
      state.sizes[action.payload.type] = action.payload.value; 
    },
    setAllSizes: (state, action) => {
      state.sizes = {
        width: action.payload.width,
        height: action.payload.height
      }
    },
    setRadius: (state, action) => {
      state.radius[action.payload.type] = action.payload.value; 
    },
    setAllRadius: (state, action) => {
      state.radius = {
        top: action.payload,
        right: action.payload,
        bottom: action.payload,
        left: action.payload
      }
    },
    setColors: (state, action) => {
      state.colors[action.payload.type] = action.payload.value; 
    },
    setBorder: (state, action) => {
      state.border[action.payload.type] = action.payload.value; 
    },
  },
});

export const {
  setSizes, setAllSizes, setRadius, setAllRadius, setColors, setBorder
} = slice.actions;

export const getButtonSettings = state => state.buttonSettings;

export default slice.reducer;
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  name: 'normal',
  sizes: {
    width: 150,
    height: 50
  },
  radius: {
    all: false,
    top: 8,
    right: 8,
    bottom: 8,
    left: 8
  },
  colors: {
    bg: '#07020dbf',
    c1: '#790e8b',
    c2: '#790e8b'
  },
  border: {
    type: 'none',
    all: false,
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
    setButtonName: (state, action) => {
      state.name = action.payload; 
    },
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
        all: true,
        top: action.payload,
        right: action.payload,
        bottom: action.payload,
        left: action.payload
      }
    },
    toggleAllRadius: (state, action) => {
      state.radius.all = action.payload
    },
    setColors: (state, action) => {
      state.colors[action.payload.type] = action.payload.value; 
    },
    setBorder: (state, action) => {
      state.border[action.payload.type] = action.payload.value; 
    },
    setAllBorder: (state, action) => {
      state.border = {
        type: 'solid',
        all: true,
        top: action.payload,
        right: action.payload,
        bottom: action.payload,
        left: action.payload,
      }
    },
    toggleAllBorder: (state, action) => {
      state.border.all = action.payload
    },
  },
});

export const {
  setButtonName, setSizes, setAllSizes, setRadius, setAllRadius, toggleAllRadius, setColors, setBorder, setAllBorder, toggleAllBorder
} = slice.actions;

export const getButtonSettings = state => state.buttonSettings;

export default slice.reducer;
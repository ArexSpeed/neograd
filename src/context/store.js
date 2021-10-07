import { configureStore } from '@reduxjs/toolkit';
import buttonSettingsReducer from './slices/buttonSettings';

export const store = configureStore({
  reducer: {
    buttonSettings: buttonSettingsReducer,
  }
});
import { configureStore } from '@reduxjs/toolkit';
import qrcodeSlice from './../features/qrcode/qrcodeSlice';

export const store = configureStore({
  reducer: {
    qrcode: qrcodeSlice
  }
});

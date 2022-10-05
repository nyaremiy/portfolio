import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false
};

export const qrcodeSlice = createSlice({
  name: 'qrcode',
  initialState,
  reducers: {
    setValueQrCode: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setValueQrCode } = qrcodeSlice.actions;

export default qrcodeSlice.reducer;

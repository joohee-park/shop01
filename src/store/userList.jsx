import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: { name: '박소영', age: 2 },
  reducers: {
    changeName(prev) {
      prev.name = '박소영 VVIP 고객님';
    },
    changeAge(prev, action) {
      prev.age += action.payload;
    },
  },
});

export let { changeName, changeAge } = user.actions;
export default user;

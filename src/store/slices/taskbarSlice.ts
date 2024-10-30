import { createSlice } from "@reduxjs/toolkit";

interface TaskbarState {
  startMenu: boolean;
  notificationPanel: boolean;
  controlCenter: boolean;
  widgetPanel: boolean;
}

const initialState: TaskbarState = {
  startMenu: false,
  notificationPanel: false,
  controlCenter: false,
  widgetPanel: false,
};

const taskbarSlice = createSlice({
  name: "taskbar",
  initialState,
  reducers: {
    toggleStartMenu: (state) => {
      state.startMenu = !state.startMenu;
      state.notificationPanel = false;
      state.controlCenter = false;
      state.widgetPanel = false;
    },
    toggleNotificationPanel: (state) => {
      state.notificationPanel = !state.notificationPanel;
      state.startMenu = false;
      state.controlCenter = false;
      state.widgetPanel = false;
    },
    toggleControlCenter: (state) => {
      state.controlCenter = !state.controlCenter;
      state.startMenu = false;
      state.notificationPanel = false;
      state.widgetPanel = false;
    },
    toggleWidgetPanel: (state) => {
      state.widgetPanel = !state.widgetPanel;
      state.startMenu = false;
      state.notificationPanel = false;
      state.controlCenter = false;
    },
  },
});

export const {
  toggleStartMenu,
  toggleNotificationPanel,
  toggleControlCenter,
  toggleWidgetPanel,
} = taskbarSlice.actions;

export default taskbarSlice.reducer;

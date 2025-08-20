import { StatusBar, Style } from "@capacitor/status-bar";

const setStatusBarDark = async () => {
  await StatusBar.setStyle({ style: Style.Dark });
};

const setStatusBarLight = async () => {
  await StatusBar.setStyle({ style: Style.Light });
};

export {
  setStatusBarDark,
  setStatusBarLight
}
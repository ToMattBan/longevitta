import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tomatt.longevitta',
  appName: 'Longevitta',
  webDir: 'dist',

  plugins: {
    StatusBar: {
      overlaysWebView: false,
      style: "LIGHT",
      backgroundColor: "#ffffffff",
    },
  },
};

export default config;

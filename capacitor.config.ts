import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tomatt.longevitta',
  appName: 'Longevitta',
  webDir: 'dist',
  server: {
    url: "http://192.168.1.26:5173/",
    cleartext: true
  }
};

export default config;

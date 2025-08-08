import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gwri.gdigw',
  appName: '경북연구원 그룹웨어',
  webDir: 'www',
  server: {
    url: 'http://211.224.129.168:8085/ndgi/#/pages/login',
    cleartext: true,
    allowNavigation: ['http://211.224.129.168:8085'],
    androidScheme: 'https'
  },
  ios: {
    contentInset: 'always'
  },
  android: {
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: "#667eea",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#ffffff",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#667eea'
    }
  }
};

export default config;

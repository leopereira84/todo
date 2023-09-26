import { StatusBar, View } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import useLoadFonts from './src/hooks/useLoadFonts';
import { Home } from './src/screens/Home';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const { fontsLoaded, onLayoutRootView } = useLoadFonts();

  if (!fontsLoaded)
    return null;

  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: '#0D0D0D' }} onLayout={onLayoutRootView} >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </View>
  );

}

import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

const useLoadFonts = () => {
  const [fontsLoaded] = useFonts({
      'Inter_400Regular': Inter_400Regular,
      'Inter_700Bold': Inter_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
  }, [fontsLoaded]);

  return { fontsLoaded, onLayoutRootView };
}

export default useLoadFonts;

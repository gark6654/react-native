import { Stack } from 'expo-router';
import { Fragment } from 'react';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import Navigation from '@/components/Navigation';

const options: NativeStackNavigationOptions = {
  headerShown: false,
};

const RootLayout = () => {
  return (
    <Fragment>
      <Navigation />
      <Stack screenOptions={options}>
        <Stack.Screen name="index" />
        <Stack.Screen name="about" />
      </Stack>
    </Fragment>
  );
};

export default RootLayout;

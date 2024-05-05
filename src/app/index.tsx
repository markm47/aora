import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Loader from '@/components/Loader';

export default function App() {
  return (
    <View className="bg-white flex-1 items-center justify-center">

      <Text className="text-3xl font-bold">Open up App.js to start working on your app!</Text>

      <Loader />

      <StatusBar style="auto" />

    </View>
  );
}
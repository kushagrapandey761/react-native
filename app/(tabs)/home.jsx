import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full items-center justify-center h-full px-4">
        <Text className="text-2xl text-white font-psemibold mt-[40px]">
          Welcome back User
        </Text>
        <View className="flex-1 w-full h-full mt-5">
          <MapView
            style={{ width: "100%", height: "100%" }} // Fix width and height
            initialRegion={{
              latitude: 30.410161, // Sample location
              longitude: 77.968963,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{ latitude: 30.410161, longitude: 77.968963 }}
            />
          </MapView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

import { View, Text } from 'react-native'
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";


const Create = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full items-center justify-center h-full px-4">
        <View className="flex-1 w-full h-full mt-5">
          <MapView
            style={{ width: "100%", height: "100%" }}
            initialRegion={{
              latitude: 30.410161,
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
}

export default Create
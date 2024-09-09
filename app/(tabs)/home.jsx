import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full items-center justify-center px-4">
        <Text className="text-2xl text-white font-psemibold mt-[40px]">
          Welcome back User
        </Text>
      </View>
      <Text className="ml-[10px] text-2xl text-white font-psemibold mt-[40px]">
        Your Bookings
      </Text>
      <View>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default Home;

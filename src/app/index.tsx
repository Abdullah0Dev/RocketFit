import { Image, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const HomePage = () => {
  const isAndroid = Platform.OS === "android";
  return (
    <View className="w-full flex flex-1 h-full bg-black">
      <Image
        source={images.onboardingImg}
        className="w-full object-contain h-3/6"
      />
      {/* texts */}
      <View className="flex px-5 flex-1  pt-9">
        <Text className="text-white text-start font-semibold text-3xl">
          {" "}
          Log Every Rep, Set, and Move Effortlessly.
        </Text>
        {/* subtitle */}
        <Text className="text-white/80 text-base mt-2">
          Track your workouts with ease. Quickly log sets, reps, and weights so
          you can focus on what matters—your training.
        </Text>
      </View>
      <CustomButton 
        title="Get Started"
        onPress={() => router.navigate("/verify-email")}
        containerStyle={`absolute  self-center ${
          isAndroid ? "bottom-6" : "bottom-12"
        }`}
      />
      <StatusBar
        style="light" // Change to 'dark' if your status bar content is light
        translucent={true} // Allows the content (image) to go behind the status bar
        backgroundColor="transparent" // Transparent background
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});

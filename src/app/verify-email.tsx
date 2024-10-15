import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import icons from "../constants/icons";
import FormField from "../components/FormField";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";
const VerifyEmail = () => {
  const [form, setForm] = useState({
    email: "", 
  });
  return (
    <SafeAreaView className="w-full flex flex-1 h-full px-3 bg-black">
      <TouchableOpacity
        onPress={() => router.back()}
        className="header item-center w-full justify-start"
      >
        <Image
          source={icons.leftArrow}
          className=" w-6 h-6 "
          resizeMode="contain"
        />
      </TouchableOpacity>
      {/* email verifications... */}
      <View className="flex flex-1 items-start  mt-5 px-1">
        <Text className="text-white text-2xl  font-bold">
          Verify your email address
        </Text>
        {/* email address */}
        <View className="email-verification w-full">
          <FormField
            value={form.email}
            title="email address"
            placeholder="johndoe@gmail.com"
            onChangeText={(e: string) => setForm({ ...form, email: e })}
          />
        </View>
        {/* accept terms & continue */}
        <View className="absolute bottom-5 w-full">
          <Text className="text-base  text-white/70">
            {" "}
            By signing up, I agree to BeastFit App’s{" "}
          </Text>
          <Text className="text-base  text-blue-400">
            Terms & conditions, and end-user license agreement.
          </Text>
          <CustomButton
            title="Verify Code"
            onPress={() => router.navigate("/submit-code")}
            containerStyle="self-center mt-3"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyEmail;

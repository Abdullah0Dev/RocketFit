import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

type CustomButtonProps = {
  title: string;
  onPress?: () => void;
  containerStyle?: string;
  testStyles?: string;
  isLoading?: boolean;
  textStyle?: string;
  value?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  containerStyle,
  testStyles,
  isLoading,
  textStyle,
  value,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`  py-4 rounded-2xl w-[96%] flex bg-white flex-row justify-center items-center  ${containerStyle} ${
        isLoading || value === "" ? "opacity-50" : ""
      }  `}
      disabled={value === ""}
    >
      <Text className={`text-black  text-xl font-bold ${textStyle} `}>
        {title}
      </Text>
      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color={"#fff"}
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

import {
  View,
  Text,
  Animated,
  Image,
  TextInput,
  TouchableOpacity,
  Easing,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import icons from "../constants/icons";

type FormFieldProps = {
  title: string;
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  otherStyles?: string;
  setError?: (error: string) => void;
  error?: string;
  [key: string]: any; // add more props ...props
};
// make reusable components to make our code clean
const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  placeholder,
  onChangeText,
  otherStyles,
  setError,
  error,
  ...props
}) => {
  // states
  const [showPassword, setShowPassword] = useState(false);
  const [shakeAnimation] = useState(new Animated.Value(0));
  // let's handle the error
  const shake = () => {
    shakeAnimation.setValue(0);
    Animated.timing(shakeAnimation, {
      toValue: 4,
      duration: 400,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start(() => {
      // clear the animation after a period of time
      setTimeout(() => {
        setError?.(""); // hide the error
      }, 3000);
    });
  };
  // if error shake
  useEffect(() => {
    if (error) {
      shake();
    }
  }, [error]);

  return (
    <View className={otherStyles + " "}>
      <Text className="text-base text-white/90 mt-5 capitalize mb-1 font-pmedium">
        {title}
      </Text>
      <Animated.View
        // handle shake here with interpolate ..
        style={{
          transform: [
            {
              translateX: shakeAnimation.interpolate({
                inputRange: [0, 1, 2, 3, 4], // when this do the output</View>
                outputRange: [0, -10, 10, -10, 0],
              }),
            },
          ],
        }}
        // let's continue styling it:)
        className={`flex  rounded-xl h-[72px] w-full px-4 bg-black/5 border-2 border-white/60 focus:border-white/80 ${
          error ? "  border-red-600  " : ""
        } `}
      >
        {/* TextInput */}
        <TextInput
          className="flex-1 text-white font-semibold text-lg"
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor={"#FFFFFF80"}
          onBlur={() => error && shake()}
          {...props}
        />
      </Animated.View>
      {/* display the error here if there... */}
      {error && (
        <Animated.Text
          className={` text-red-500 font-regular text-sm mt-3 self-center `}
        >
          {error}
        </Animated.Text>
      )}
    </View>
  );
};

export default FormField;

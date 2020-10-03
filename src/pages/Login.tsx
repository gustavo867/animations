import { StatusBar } from "expo-status-bar";
import * as React from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
  sequence,
} from "react-native-reanimated";
import { StyleSheet, View } from "react-native";

import heroImg from "../assets/hero.png";

export default function Login() {
  const titlePosition = useSharedValue(30);
  const imagePosition = useSharedValue(-30);

  React.useEffect(() => {
    imagePosition.value = withTiming(
      0,
      {
        duration: 500,
      },
      () => {
        titlePosition.value = sequence(
          withTiming(0, {
            duration: 1000,
            easing: Easing.bounce,
          }),
          withTiming(-300, {
            duration: 500,
            easing: Easing.bounce,
          })
        );
      }
    );
  }, []);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: titlePosition.value }],
      opacity: interpolate(
        titlePosition.value,
        [30, 0],
        [0, 1],
        Extrapolate.CLAMP
      ),
    };
  });

  const heroStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: imagePosition.value }],
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Animated.Image style={[styles.image, heroStyle]} source={heroImg} />
      <Animated.Text style={[styles.text, titleStyle]}>
        Bem-vindo ao App
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#13131A",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
  },
  image: {
    width: 288,
    height: 200,
    marginBottom: 40,
  },
});

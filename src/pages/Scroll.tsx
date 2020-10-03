import React from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import Animated, {
  event,
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const Scroll: React.FC = () => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 180],
        [300, 120],
        Extrapolate.CLAMP
      ),
      flexDirection: scrollY.value > 180 ? "row" : "column",
      alignItems: "center",
      justifyContent: scrollY.value < 180 ? "flex-end" : "flex-start",
    };
  });

  const nameStyle = useAnimatedStyle(() => {
    return {
      marginLeft: scrollY.value > 180 ? 20 : 0,
    };
  });

  const avatarStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [100, 130],
        [140, 70],
        Extrapolate.CLAMP
      ),
      width: interpolate(
        scrollY.value,
        [100, 130],
        [140, 70],
        Extrapolate.CLAMP
      ),
      opacity: interpolate(
        scrollY.value,
        [100, 130],
        [1, 1],
        Extrapolate.CLAMP
      ),
      borderRadius: interpolate(
        scrollY.value,
        [100, 130],
        [70, 35],
        Extrapolate.CLAMP
      ),
      marginLeft: scrollY.value > 180 ? 10 : 0,
      marginTop: scrollY.value > 180 ? 10 : 0,
    };
  });

  return (
    <View>
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingTop: 300,
        }}
      >
        <Text style={styles.listItem}>Item da list</Text>
        <Text style={styles.listItem}>Item da list</Text>
        <Text style={styles.listItem}>Item da list</Text>
        <Text style={styles.listItem}>Item da list</Text>
        <Text style={styles.listItem}>Item da list</Text>
        <Text style={styles.listItem}>Item da list</Text>
        <Text style={styles.listItem}>Item da list</Text>
        <Text style={styles.listItem}>Item da list</Text>
        <Text style={styles.listItem}>Item da list</Text>
        <Text style={styles.listItem}>Item da list</Text>
        <Text style={styles.listItem}>Item da list</Text>
        <Text style={styles.listItem}>Item da list</Text>
        <Text style={styles.listItem}>Item da list</Text>
        <Text style={styles.listItem}>Item da list</Text>
        <Text style={styles.listItem}>Item da list</Text>
        <Text style={styles.listItem}>Item da list</Text>
        <Text style={styles.listItem}>Item da list</Text>
        <Text style={styles.listItem}>Item da list</Text>
        <Text style={styles.listItem}>Item da list</Text>
        <Text style={styles.listItem}>Item da list</Text>
      </Animated.ScrollView>

      <Animated.View style={[styles.header, headerStyle]}>
        <Animated.Image
          style={[styles.avatar, avatarStyle]}
          source={{
            uri: "https://github.com/gustavo867.png",
          }}
        />
        <Animated.Text style={[styles.name, nameStyle]}>
          Gustavo Santana
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 300,
    backgroundColor: "#6C63FF",
    paddingVertical: 30,
    justifyContent: "flex-end",
    alignItems: "center",

    position: "absolute",
    overflow: "hidden",
    left: 0,
    right: 0,
    top: 0,
  },
  avatar: {
    height: 140,
    width: 140,
    borderRadius: 70,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
    color: "#FFF",
  },
  listItem: {
    padding: 20,
    fontSize: 18,
  },
});

export default Scroll;

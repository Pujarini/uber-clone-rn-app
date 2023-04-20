import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "./Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "./NavigateCard";
import RideOptions from "./RideOptions";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={tw`h-1/2`}>
            <Map />
          </View>
          <View style={tw`h-1/2`}>
            <Stack.Navigator>
              <Stack.Screen
                name="NavigateCars"
                component={NavigateCard}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RideOptionscard"
                component={RideOptions}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

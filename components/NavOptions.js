import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image:
      "https://www.pngall.com/wp-content/uploads/4/Uber-Eats-Transparent.png",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.screen)}
              style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
              disabled={!origin?.location}
            >
              <View style={tw`${!origin?.location && "opacity-60"}`}>
                <Image
                  style={{ width: 120, height: 120, resizeMode: "contain" }}
                  source={{ uri: item.image }}
                />
                <Text style={tw`mt-2 mb-2 text-lg font-semibold`}>
                  {item.title}
                </Text>
                <Icon
                  type="antdesign"
                  name="arrowright"
                  color="white"
                  style={tw` p-2 bg-black rounded-full w-10`}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  text: {
    color: "#000",
  },
  container: {
    // backgroundColor: "blue",
    // height: "50px",
  },
});

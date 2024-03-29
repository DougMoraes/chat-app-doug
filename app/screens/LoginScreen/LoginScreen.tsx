import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from "./styles";
import { RootStackParamList } from "../../types";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const storeUsername = async () => {
    try {
      await AsyncStorage.setItem("username", username);
      navigation.navigate("Chat");
    } catch (error) {
      Alert.alert("Error! While saving username");
    }
  }

  const handleSignIn = () => {
    if (username.trim()) {
      storeUsername();
    } else {
      Alert.alert("Username is required.")
    }
  };

  return (
    <SafeAreaView style={styles.loginscreen}>
      <View style={styles.loginscreen}>
        <Text style={styles.loginheading}> Sign In</Text>
        <View style={styles.logininputContainer}>
          <TextInput
            autoCorrect={false}
            placeholder='Enter your username'
            style={styles.logininput}
            onChangeText={(value) => setUsername(value)}
          />
        </View>
        <Pressable onPress={handleSignIn} style={styles.loginbutton}>
          <View>
            <Text style={styles.loginbuttonText}>Get Started</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  )
};

export default LoginScreen;

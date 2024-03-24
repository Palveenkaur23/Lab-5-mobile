// AboutScreen.jsx
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import MainLayout from '../layouts/MainLayout';
const AboutScreen = ({navigation}) => {
  const appName = "Your App Name";
  const authorName = "Your Name";
  const currentDate = new Date().toDateString();

  return (
    <MainLayout>
    <View style={styles.container}>
      <Text style={styles.text}>App Name: {appName}</Text>
      <Text style={styles.text}>Author: {authorName}</Text>
      <Text style={styles.text}>Current Date: {currentDate}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default AboutScreen;

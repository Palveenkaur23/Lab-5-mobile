import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/Stack';
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
const Stack = createStackNavigator();

function App() {
  const [tasks, setTasks] = useState([
    "Do laundry",
    "Go for a walk",
    "Walk the dog",
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
      <SafeAreaView style={styles.container} >
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});

export default App;

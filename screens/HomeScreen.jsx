// HomeScreen.jsx
import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import MainLayout from '../layouts/MainLayout';

  const [tasks, setTasks] = useState([
    "Do laundry",
    "Go for a walk",
    "Walk the dog",
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  const HomeScreen = ({ navigation }) => 
  {
    return (
        <MainLayout>
    <View>
      style={styles.container}
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      
      <Text>Home Screen</Text>
      <Button
        title="Go to About"
      onPress={() => navigation.navigate('About')}
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
  },
});

export default HomeScreen;

import React, { useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import CalendarPicker from 'react-native-calendar-picker'
import Task from './components/Task'

const App = () => {
  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])
  const [DateChange, onDateChange] = useState()

  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }



  return (
    <View style={styles.container}>
      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>
        <ScrollView>
          <CalendarPicker
            selectedDayColor="#3AAFA9"
            todayBackgroundColor="#3AAFA9"
            startFromMonday={true}
          />
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}
                >
                  <Task text={item} />
                </TouchableOpacity>
              )
            })}
          </View>
        </ScrollView>
      </View>

      <KeyboardAvoidingView style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={'Time to do something rock!'}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEF2F1',
  },
  tasksWrapper: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 30,
  },
  items: {
    paddingTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
})

export default App

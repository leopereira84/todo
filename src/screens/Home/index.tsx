import { View, Text, Image, FlatList, Alert, TextInput, TouchableOpacity } from  'react-native';
import React, { useState } from 'react';

import { styles } from './styled';
import { Task } from '../../components/Task';

export type TaskProps = {
  task: string;
  status: number;
}

export function Home () {

  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const [newTask, setNewTask] = useState('');

  function handleTaskAdd() {
    setTasks(prevState => [{ task: newTask, status: 0}, ...prevState]);
    setNewTask('');
  }

  function handleTaskUpdate(index: string) {
    setTasks(tasks.map((task) => {
      if (task.task === index) {
        task.status = (task.status === 0 ? 1 : 0)
      }
      return task
    }))
  }

  function handleTaskRemove(description: string) {
    Alert.alert("Remover Tarefa ?", description, [
      {
        text: "Sim",
        onPress: () => setTasks(prevState => prevState.filter(item => item.task !== description))
      },
      {
        text: "Não",
        style: 'cancel',
      }
    ]);
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={require('../../assets/images/rocket.png')}
        />
        <Text style={styles.headerTitle}>to<Text style={{ color: '#5E60CE' }}>do</Text></Text>
      </View>

      <View style={styles.box}>
        <TextInput
          style={styles.boxInput}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
          onChangeText={setNewTask}
          value={newTask}
        />
        <TouchableOpacity
          style={styles.buttom}
          activeOpacity={0.8}
          onPress={handleTaskAdd}
        >
          <Text style={styles.buttomText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, width: '100%' }}>

        <View style={styles.taskHeaderView}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.taskHeaderCreated}>Criadas</Text>
            <Text style={styles.taskHeaderCounter}>{tasks.filter(({status}) => status === 0).length}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.taskHeaderConcluded}>Concluídas</Text>
            <Text style={styles.taskHeaderCounter}>{tasks.filter(({status}) => status === 1).length}</Text>
          </View>
        </View>

        <FlatList
          style={styles.taskList}
          data={tasks.sort((a, b) => a.status < b.status ? -1 : 1)}
          keyExtractor={item => item.task}
          showsVerticalScrollIndicator={false}

          ListEmptyComponent={() =>
            <>
              <Image
                style={styles.taskListEmptyImage}
                source={require('../../assets/images/clipboard.png')}
              />
              <Text style={styles.taskListEmptyText}>
                Você ainda não tem tarefas cadastradas.
              </Text>
              <Text style={[styles.taskListEmptyText, { fontFamily: 'Inter_400Regular' } ]}>
                Crie tarefas e organize seus itens a fazer.
              </Text>
            </>
          }

          renderItem={({ item }) => (
            <Task
              key={item.task}
              task={item}
              onUpdate={() => handleTaskUpdate(item.task)}
              onRemove={() => handleTaskRemove(item.task)}
            />
          )}
        />
      </View>
    </View>
  );
}

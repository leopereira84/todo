import { View, Text, Image, FlatList, Alert, TextInput, TouchableOpacity } from  'react-native';
import React, { useEffect, useState } from 'react';

import { styles } from './styled';
import { Task } from '../../components/Task';

export type TaskProps = {
  task: string;
  status: number;
}

export function Home () {

  const [tasks, setTasks] = useState<TaskProps[]>([
      { task: "Integer urna interdum massa libero auctor neque turpis turpis semper.", status: 1 },
      { task: "String 2 na interdum massa libero auctor neque turpis turpis semper.", status: 0 },
      { task: "Integer 3 na interdum massa libero auctor neque turpis turpis semper.", status: 0 },
      { task: "String 4 na interdum massa libero auctor neque turpis turpis semper.", status: 0 },
      { task: "Integer 5 na interdum massa libero auctor neque turpis turpis semper.", status: 1 },
      { task: "String 6 na interdum massa libero auctor neque turpis turpis semper.", status: 0 },
      { task: "Integer 7 na interdum massa libero auctor neque turpis turpis semper.", status: 1 },
      { task: "String 8 na interdum massa libero auctor neque turpis turpis semper.", status: 0 },
      { task: "Integer 9 na interdum massa libero auctor neque turpis turpis semper.", status: 0 },
      { task: "String 0 na interdum massa libero auctor neque turpis turpis semper.", status: 0 },
  ]);

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
    Alert.alert("Remover", `Remover tarefa ${description} ?`, [
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
        <FlatList
          style={styles.taskList}
          data={tasks}
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

          ListHeaderComponent={
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

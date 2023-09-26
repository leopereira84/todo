import { View, TextInput, Text, Image, TouchableOpacity, FlatList } from  'react-native';
import { styles } from './styled';
import React, { useState } from 'react';

type Task = {
  task: string,
  status: boolean
}

export function Home () {

  const [tasks, setTasks] = useState<Task[]>([]);

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
        ></TextInput>
        <TouchableOpacity
          style={styles.buttom}
          activeOpacity={0.8}
        >
          <Text style={styles.buttomText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, width: '100%' }}>
      <FlatList
        style={{ width: '100%', alignSelf: 'center', padding: 10 }}
        data={[]}
        keyExtractor={item => item}
        ListHeaderComponent={
          <View style={{ flexDirection: 'row', marginBottom: 20, justifyContent: 'space-between',
                         borderBottomWidth: 0.2, borderBottomColor: '#F2F2F2', paddingBottom: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.taskHeaderCreated}>Criadas</Text>
              <Text style={styles.taskHeaderCounter}>25</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.taskHeaderConcluded}>Concluídas</Text>
              <Text style={styles.taskHeaderCounter}>12</Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
            <Text>item</Text>
        )}
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
      />
      </View>
    </View>
  );
}

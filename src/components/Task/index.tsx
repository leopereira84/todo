import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { TaskProps } from '../../screens/Home';

type Props = {
  task: TaskProps;
  onUpdate: () => void;
  onRemove: () => void;
}

export function Task ({ task, onUpdate, onRemove }: Props) {
  return (
    <View style={styles.taskListView}>
      <TouchableOpacity activeOpacity={0.8} onPress={onUpdate}>
        <Text style={ task.status === 1 ? styles.taskListChecked : styles.taskListUnchecked }>&#10004;</Text>
      </TouchableOpacity>
      <Text style={ task.status === 1 ? styles.taskListTextChecked : styles.taskListTextUnchecked }>{task.task}</Text>
      <TouchableOpacity activeOpacity={0.8} onPress={onRemove}>
        <Image
          style={styles.taskListImage}
          source={require('../../assets/images/trash.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

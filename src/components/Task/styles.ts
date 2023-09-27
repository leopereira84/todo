import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskListView: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#262626',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  taskListUnchecked: {
    width: 24,
    height: 24,
    borderRadius: 20,
    borderColor: '#4EA8DE',
    color: '#262626',
    borderWidth: 2,
    textAlign: 'center',
    marginRight: 15
  },
  taskListChecked: {
    fontSize: 12,
    width: 24,
    height: 24,
    borderRadius: 20,
    borderColor: '#5E60CE',
    backgroundColor: '#5E60CE',
    color: '#F2F2F2',
    borderWidth: 2,
    padding: 3,
    textAlign: 'center',
    marginRight: 15
  },
  taskListTextUnchecked: {
    fontSize: 14,
    width: '75%',
    fontFamily: 'Inter_400Regular',
    color: '#F2F2F2',
    textAlign: 'justify',
    marginRight: 10
  },
  taskListTextChecked: {
    fontSize: 14,
    width: '75%',
    fontFamily: 'Inter_400Regular',
    color: '#808080',
    textDecorationLine: 'line-through',
    textAlign: 'justify',
    marginRight: 10
  },
  taskListImage: {
    width: 35,
    height: 40,
    resizeMode: 'stretch',
  }
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  },
  header: {
    flexDirection: 'row',
    height: 50,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerImage: {
    width: 30,
    height: 40,
    resizeMode: 'stretch',
    marginRight: 10,
  },
  headerTitle: {
    fontFamily: 'Inter_700Bold',
    fontSize: 36,
    color: '#4EA8DE',
  },
  box: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'space-between',
    borderWidth: 1,
    marginBottom: 30
  },
  boxInput: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#F2F2F2',
    backgroundColor: '#262626',
    borderRadius: 5,
    height: 56,
    padding: 16,
  },
  buttom: {
    height: 56,
    width: 56,
    backgroundColor: '#1E6F9F',
    borderRadius: 5,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttomText: {
    fontSize: 12,
    fontFamily: 'Inter_700Bold',
    color: '#F2F2F2',
    width: 20,
    height: 20,
    borderRadius: 20,
    borderColor: '#F2F2F2',
    borderWidth: 1,
    textAlign: 'center',
  },
  taskHeaderView: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
    borderBottomWidth: 0.2,
    borderBottomColor: '#F2F2F2',
    paddingBottom: 10,
  },
  taskHeaderCreated: {
    fontFamily: 'Inter_700Bold',
    color: '#4EA8DE',
    lineHeight: 25,
  },
  taskHeaderConcluded: {
    fontFamily: 'Inter_700Bold',
    color: '#8284FA',
    lineHeight: 25,
    textAlign: 'right'
  },
  taskHeaderCounter: {
    fontFamily: 'Inter_700Bold',
    fontSize: 12,
    color: '#F2F2F2',
    backgroundColor: '#333333',
    padding: 3,
    height: 25,
    width: 30,
    borderRadius: 20,
    textAlign: 'center',
    marginLeft: 5
  },
  taskList: {
    width: '100%',
    alignSelf: 'center',
    padding: 10
  },
  taskListEmptyImage: {
    width: 56,
    height: 56,
    resizeMode: 'stretch',
    alignSelf: 'center',
    margin: 20,
  },
  taskListEmptyText: {
    fontFamily: 'Inter_700Bold',
    color: '#808080',
    textAlign: 'center'
  },
});

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,                
    justifyContent: 'center', 
    alignItems: 'center',    
    padding: 20,             
    backgroundColor: '#fff', 
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 20,
  },
});

export default styles;
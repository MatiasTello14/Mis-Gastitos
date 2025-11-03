import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: { borderRadius: 10 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nombre: { fontSize: 18, fontWeight: 'bold' },
  categoria: { color: 'gray', fontSize: 14 },
  fecha: { color: '#777', fontSize: 12 },
  monto: { fontSize: 18, fontWeight: 'bold', color: '#2e8b57' },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
});

export default styles;
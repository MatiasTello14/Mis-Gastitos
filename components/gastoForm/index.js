import { View, Button } from 'react-native';
import { Input } from '@rneui/themed';
import styles from './styles';

export default function GastoForm({ onCancel }) {
  return (
    <View style={styles.container}>
      <Input placeholder="Nombre del gasto" />
      <Input placeholder="Monto ($)" keyboardType="numeric" />
      <Input placeholder="Categoría" />
      <Input placeholder="Fecha (YYYY-MM-DD)" />
      <View style={styles.buttons}>
        <Button title="Guardar" onPress={() => console.log('Guardar gasto')} />
        <Button title="Cancelar" onPress={onCancel} />
      </View>
    </View>
  );
}
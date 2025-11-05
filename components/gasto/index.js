import { View, Text, Button, Image } from 'react-native';
import { Card } from '@rneui/themed';
import styles from './styles';

export default function Gasto({ gasto }) {

  console.log(gasto)
  return (
    <Card containerStyle={styles.card}>
      <View style={styles.row}>
        <Image style={styles.imagen} source={gasto.imagen} />
        <View>
          <Text style={styles.nombre}>{gasto.nombre}</Text>
          <Text style={styles.fecha}>{gasto.fecha}</Text>
        </View>
        <Text style={styles.monto}>${gasto.monto}</Text>
      </View>

      <Card.Divider />
      <View style={styles.buttons}>
        <Button title="Editar" />
        <Button title="Eliminar" />
      </View>
    </Card>
  );
}


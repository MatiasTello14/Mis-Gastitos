// components/gasto/index.js
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Card } from '@rneui/themed';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Gasto({ gasto }) {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Details', { id: gasto.id })}>
        <Card containerStyle={styles.card}>
          <View style={styles.row}>
            <Image style={styles.imagen} source={{ uri: gasto.imagen }} />

            <View style={styles.infoContainer}>
              {/* Usamos 'categoria' en lugar de 'nombre' */}
              <Text style={styles.nombre}>{gasto.nombre}</Text>
              <Text style={styles.fecha}>{gasto.fecha}</Text>
              <Text style={styles.categoria}>{gasto.categoria}</Text>
              
              {/* Mostrar monto original si es USD */}
              {gasto.moneda === 'USD' && (
                <Text style={styles.monedaOriginal}>
                  (${gasto.monto} USD)
                </Text>
              )}
            </View>

            {/* Usamos montoEnARS */}
            <Text style={styles.monto}>${gasto.montoEnARS}</Text>
          </View>

        </Card>
      </TouchableOpacity>
    </View>
  );
}
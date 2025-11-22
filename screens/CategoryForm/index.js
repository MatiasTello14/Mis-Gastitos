import { useState } from 'react';
import { View, Button, Text, Alert } from 'react-native';
import { Input } from '@rneui/themed';
import { agregarCategoria } from '../../services/categorias';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'; 
import * as ImagePicker from "expo-image-picker";

export default function CategoryForm() {
  const navigation = useNavigation();
  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState('');
  const [imagenLocal, setImagenLocal] = useState(null);

const pickImage = async () => {
  const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!perm.granted) {
    Alert.alert("Permiso requerido", "Necesito permiso para acceder a tus fotos");
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 0.7,
  });

  if (!result.canceled) {
    setImagenLocal(result.assets[0]);
  }
};

const handleSubmit = async () => {
  if (!nombre.trim()) {
    Alert.alert("Error", "El nombre es obligatorio");
    return;
  }

  const IMAGEN_POR_DEFECTO = "https://cdn-icons-png.flaticon.com/512/3917/3917188.png";

  try {
    await agregarCategoria({
      nombre,
      imagen: imagenLocal ? imagenLocal.uri : IMAGEN_POR_DEFECTO
    });

    navigation.goBack();
  } catch (err) {
    Alert.alert("Error", err.message);
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nueva Categoría</Text>
      <Input placeholder="Nombre de la categoría" onChangeText={setNombre} />
      <Button title="Elegir imagen" onPress={pickImage} />

        {imagenLocal && (
          <Image
            source={{ uri: imagenLocal.uri }}
            style={{ width: 120, height: 120, marginTop: 10 }}
          />
        )}
      <View style={styles.buttons}>
        <Button title="Guardar Categoría" onPress={handleSubmit} />
      </View>
    </View>
  );
}
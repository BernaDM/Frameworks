import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetalhesScreen({ route }) {
  const { ingresso } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{ingresso.titulo}</Text>
      <Text>Local: {ingresso.local}</Text>
      <Text>Data: {ingresso.data}</Text>
      <Text>Preço: {ingresso.preco}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
});

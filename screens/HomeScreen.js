import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { ingressos } from '../data/ingressos';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Eventos Disponíveis</Text>
      <FlatList
        data={ingressos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.titulo}</Text>
            <Text>{item.data} - {item.local}</Text>
            <Text>{item.preco}</Text>
            <Button
              title="Ver detalhes"
              onPress={() => navigation.navigate('Detalhes', { ingresso: item })}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 24, marginBottom: 20 },
  card: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

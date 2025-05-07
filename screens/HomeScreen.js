import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { ingressos } from "../data/ingressos";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen({ navigation, setAuth }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Eventos Disponíveis</Text>
      <FlatList
        data={ingressos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.titulo}</Text>
            <Text style={styles.texto}>
              {item.data} - {item.local}
            </Text>
            <Text style={styles.texto}>{item.preco}</Text>
            <Button
              title="Ver detalhes"
              color="#00E676"
              onPress={() =>
                navigation.navigate("Detalhes", { ingresso: item })
              }
            />
          </View>
        )}
      />
      <Button
        title="Sair"
        color="#00E676"
        onPress={async () => {
          await AsyncStorage.removeItem("userToken");
          setAuth(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#1A1A1A' },
  titulo: { fontSize: 24, marginBottom: 20, color: '#00E676', textAlign: 'center' },
  card: {
    backgroundColor: '#2A2A2A',
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  texto: {
    color: '#ccc',
  },
});


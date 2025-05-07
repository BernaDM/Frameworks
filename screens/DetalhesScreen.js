import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetalhesScreen({ route }) {
  const { ingresso } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{ingresso.titulo}</Text>
      <Text style={styles.texto}>Local: {ingresso.local}</Text>
      <Text style={styles.texto}>Data: {ingresso.data}</Text>
      <Text style={styles.texto}>Preço: {ingresso.preco}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#1A1A1A" },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#00E676",
  },
  texto: { fontSize: 16, color: "#ccc", marginBottom: 5 },
});

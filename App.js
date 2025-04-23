// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   ScrollView,
//   StyleSheet,
//   Button,
// } from 'react-native';

// export default function App() {
//   const [name, setName] = useState('');
//   const [message, setMessage] = useState('');

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Olá, React Native! 👋</Text>

//       <Image
//         source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
//         style={styles.image}
//       />

//       <Text style={styles.label}>Digite seu nome:</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Seu nome aqui"
//         onChangeText={text => setName(text)}
//         onSubmitEditing={() => setMessage(`Bem-vindo(a), ${name}!`)}
//       />

//       <Button
//         title="Mostrar saudação"
//         onPress={() => setMessage(`Olá, ${name}! Tudo certo?`)}
//       />

//       {message ? <Text style={styles.message}>{message}</Text> : null}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#FAFFFA',
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#3B4540',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   image: {
//     width: 80,
//     height: 80,
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     color: '#438951',
//     marginBottom: 5,
//   },
//   input: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     marginBottom: 15,
//   },
//   message: {
//     fontSize: 18,
//     color: '#333',
//     marginTop: 20,
//     textAlign: 'center',
//   },
// });

// Responsividade
// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   useWindowDimensions,
// } from 'react-native';

// export default function App() {
//   const { width } = useWindowDimensions(); // Captura a largura da tela

//   const isLargeScreen = width > 600; // Exemplo: tablets ou telas maiores

//   return (
//     <View style={styles.container}>
//       <View
//         style={[
//           styles.card,
//           { flexDirection: isLargeScreen ? 'row' : 'column' }, // muda o layout
//         ]}
//       >
//         <Image
//           source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
//           style={[styles.image, isLargeScreen && { marginRight: 20 }]}
//         />
//         <Text style={styles.text}>
//           {isLargeScreen
//             ? 'Você está em uma tela grande 📱💻'
//             : 'Você está em uma tela pequena 📱'}
//         </Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FAFFFA',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   card: {
//     backgroundColor: '#E0F5EA',
//     padding: 20,
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: 80,
//     height: 80,
//     marginBottom: 10,
//   },
//   text: {
//     fontSize: 18,
//     color: '#333',
//     textAlign: 'center',
//   },
// });

// Autenticação
import React from 'react';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return <AppNavigator />;
}


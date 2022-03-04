import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>METEU ESSA?</Text>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>QUE PAPINHO 1</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
      />
    </View>
    <View style={styles.bloco}>
        <Text style={styles.textoBloco}>QUE PAPINHO 2</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Somar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: '#7B68EE',
    fontSize: 30
  },
  textoBloco:{
    fontSize:20,
  },
  input:{
    borderColor:'#7B68EE',
    borderWidth:2,
    fontSize:30,
    width:'80%'
  },
  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:30
  },
  botao:{
    backgroundColor:'#7B68EE',
    width:'80%',
    textAlign:'center'
  },
  textoBotao:{
    color:"#fff",
    fontSize:30
  }
});
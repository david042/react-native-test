import {React, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [result, setResult] = useState();

  function soma(){
    setResult (parseFloat (valor1) + parseFloat(valor2));
  }

  function subtracao(){
    setResult (parseFloat (valor1) - parseFloat(valor2));
  }

  function multiplicacao(){
    setResult (parseFloat (valor1) * parseFloat(valor2));
  }

  function divisao(){
    setResult (parseFloat (valor1) / parseFloat(valor2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}> Calculator </Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.pinimg.com/236x/50/e9/8e/50e98e043b6dc0cba4f5dcd6ea37fc46--ugly-monkey-monkey-baby.jpg',
        }}
      />
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}> Valor 1 </Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor1}
          placeholder='VALOR 1:'
          onChangeText={(texto)=>setValor1(texto)}
      />
    </View>
    <View style={styles.bloco}>
        <Text style={styles.textoBloco}> Valor 2 </Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          placeholder='VALOR 2:'
          value={valor2}
          onChangeText={(texto)=>setValor2(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
        style={styles.botao}
        onPress={soma}>
            <Text style={styles.textoBotao}>SOMAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
        style={styles.botao}
        onPress={subtracao}>
            <Text style={styles.textoBotao}>SUBTRAIR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
        style={styles.botao}
        onPress={multiplicacao}>
            <Text style={styles.textoBotao}>MULTIPLICAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
        style={styles.botao}
        onPress={divisao}>
            <Text style={styles.textoBotao}>DIVIDIR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.texto}>RESULTADO: {result}</Text>
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
    color: '#000',
    fontSize: 30
  },
  textoBloco:{
    fontSize:30,
  },
  input:{
    borderColor:'#000',
    borderWidth:2,
    fontSize:30,
    width:'80%',
    textAlign: 'center'
  },
  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:30
  },
  botao:{
    backgroundColor:'#008',
    width:'80%',
    textAlign:'center'
  },
  textoBotao:{
    color:"#fff",
    fontSize:30
  },
  logo:{
    width: 80,
    height: 70,
    margin: 5
  }
});
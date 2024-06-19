import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function App() { 
  const [img,setImg] = useState(require('./src/biscoito.png'))
  const [textoFrase,setTextoFrase] = useState('')

  let frases =[
    'O sucesso está ao seu alcance.',
    'A felicidade é um caminho, não um destino.',
    'A sorte favorece os corajosos.',
    'Um novo começo está prestes a acontecer.',
    'A gratidão transforma o que temos em suficiente.',
    'Grandes oportunidades surgirão em breve.',
    'A paciência é uma virtude que será recompensada.',
    'Você é capaz de realizar seus sonhos.',
    'A harmonia em sua vida está aumentando.',
    'Acredite em si mesmo e tudo será possível.'

  ]

  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length)

    setTextoFrase('"' + frases[numeroAleatorio] + '"')
    setImg(require('./src/biscoitoAberto.png'))
  }

  function fechaBiscoito(){

    setImg(require('./src/biscoito.png'))
    setTextoFrase('')
  }
  

  
  return (
    <View style={styles.container}>
      <Image 
        source={img}
        style={styles.img}
      />

      <Text style={styles.textofrase}> {textoFrase} </Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {marginTop: 15, borderColor:'#121212'}]} onPress={fechaBiscoito}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, {color:'#121212'}]}>Reiniciar </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
    width: 230,
    height: 230,
  },
  textofrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

export default App;

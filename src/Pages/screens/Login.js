
import react, { useState } from "react"
import { Image, StyleSheet, TextInput, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

export default function Login({ navigation }) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const cadastre = () => {
    navigation.navigate("Cadastro")
  }

  return (

    <View style={styles.container}>

      <Text style={{ fontSize: 30, color: '#444791', marginBottom: '5%' }}>Seja bem vindo!</Text>

      <View style={styles.inputArea}>
        <Text style={styles.text}>Email</Text>
        <Input
          placeholder="Digite seu E-mail"
          leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#444791' }}
          onChangeText={value => setEmail(value)}
          keyboardType="email-address"
        />
        <Text style={styles.text}>Senha</Text>
        <Input
          placeholder="Digite sua senha"
          secureTextEntry={true}
          leftIcon={{ type: 'font-awesome', name: 'lock', color: '#444791' }}
          onChangeText={value => setPassword(value)}
        />

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textButtom}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => cadastre()}
          style={styles.link}
        >
          <Text style={{ color: "#6558f5", fontSize:18 }}>Ainda não possui uma conta? </Text>
          <Text style={{ fontWeight: "bold", color: "#6558f5", fontSize:18}}> Cadastre-se</Text>
        </TouchableOpacity>

        <View style={styles.LogoBuzz}>
          <Image style={styles.imagem} source={require('../../img/busao.png')} width='15'></Image>
          <Text style={styles.text}>BUZZ</Text>
        </View>


      </View>




    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "scroll",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  inputArea: {
    marginLeft: '3%',
    width: "90%",
    backgroundColor: '#fff',
    alignItems: "flex-start",
    height: "70%",
    marginBottom: "5%",
    marginTop: "5%"
  },
  link: {
        flexDirection: "row",
    width: '80%',
    marginLeft: 8,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
    marginTop: 20
  },
  text: {
    fontSize: 22,
    color: '#444791',
    marginLeft: 15
  },
  botao: {
    height: 50,
    width: '40%',
    backgroundColor: "#444791",
    alignContent: "center",
    alignItems: "center",
    marginLeft: '30%',
  },
  textButtom: {
    marginTop: '6%',
    alignContent: "center",
    alignItems: "center",
    fontSize: 22,
    color: '#fff',
    position: "relative"
  },
  imagem: {
    width: 60,
    height: 60,
    marginLeft: "25%"

  },
  LogoBuzz: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#fff',
    width: "100%",
    flexDirection: "row",
    alignItems: "center",

  },
  textCadastro: {
    color: "#6558f5",
    fontSize: 22
  }

});



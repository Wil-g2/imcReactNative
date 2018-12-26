import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {peso: '', altura:''};
    this.Calcular = this.Calcular.bind(this);
  }

  Calcular(){
    let msg = this.state;  
    let peso = parseFloat(msg.peso);
    let altura = parseFloat(msg.altura);    
    imc = (peso/(altura*altura)).toFixed(2);

    if (imc <17) {
      Alert.alert('Muito abaixo do peso! '+ imc); 
    }else if(imc <= 18.49){
      Alert.alert('Abaixo do peso! '+ imc); 
    }else if(imc <= 24.99){
      Alert.alert('Peso Normal! \n'+ imc); 
    }else if (imc <= 29.99){
      Alert.alert('Acima do peso! \n'+ imc); 
    }else if (imc <= 34.99){
      Alert.alert('Obesidade I! '+ imc); 
    }else if(imc <=39.99){
      Alert.alert('Obesidade II (severa)! '+ imc); 
    }else{ //acima de 40 
      Alert.alert('Obesidade III (mórbida)! '+ imc); 
    }
          
  }

  render() {
    return (
      <View style={styles.container}>        
        <Text style={styles.textField}>IMC</Text>
        <TextInput style={styles.input} placeholder="Entre com sua Altura." onChangeText={(altura) => {this.setState({altura})} }/>
        <TextInput style={styles.input} placeholder="Entre com seu Peso."  onChangeText={(peso) => {this.setState({peso})}}/>
        <Button  title="Calcular" onPress={this.Calcular}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textField: {
    fontSize:30,
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'green'
  },
  input:{
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center', 
    padding: 10,
    margin: 10
  }
});

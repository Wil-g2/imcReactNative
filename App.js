import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {peso: '', altura:'', imc:''};
    this.Calcular = this.Calcular.bind(this);
  }

  Calcular(){
    let msg = this.state;  
    let peso = parseFloat(msg.peso);
    let altura = parseFloat(msg.altura);    
    imc = (peso/(altura*altura)).toFixed(2);
    if (imc <17) {      
      msg.imc = `${imc} Muito abaixo do peso!`;//Alert.alert('Muito abaixo do peso! '+ imc); 
    }else if(imc <= 18.49){
      msg.imc = `${imc} Abaixo do peso!` ;
    }else if(imc <= 24.99){
      msg.imc = `${imc} Peso Normal!` ;
    }else if (imc <= 29.99){
      msg.imc = `${imc} Acima do peso!`;
    }else if (imc <= 34.99){
      msg.imc = `${imc} Obesidade I!`;
    }else if(imc <=39.99){
      msg.imc = `${imc} Obesidade II (severa)!` ;
    }else{ //acima de 40 
      msg.imc = `${imc} Obesidade III (mórbida)!`;
    }
          
    this.setState(msg);
  }

  render() {
    return (
      <View style={styles.container}>        
        <Text style={styles.textField}>IMC</Text>        
        <TextInput style={styles.input} keyboardType='numeric' placeholder="Entre com sua Altura." onChangeText={(altura) => {this.setState({altura})} }/>
        <TextInput style={styles.input} keyboardType='numeric' placeholder="Entre com seu Peso."  onChangeText={(peso) => {this.setState({peso})}}/>
        <Button style={styles.button} title="Calcular" onPress={this.Calcular}/>        
        <Text style={styles.result}>IMC:{this.state.imc}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#fff',        
    justifyContent: 'center'
  },
  textField: {
    fontSize:30,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'green',
    margin:10
  },
  input:{
    height: 40,
    borderWidth: 1,       
    borderColor: 'black',
    alignItems: 'center', 
    padding: 10,
    margin: 10
  }, 
  result:{
    padding:10,
    margin: 20,
    fontSize:30,
    color: 'green',
    alignSelf: 'center',
    fontWeight:'bold'
  },

  button: {
    alignSelf:'center',
    margin:20,
    padding:10
  }
});

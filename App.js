import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
          
    msg.peso =  ''; 
    msg.altura = ''; 
    this.setState(msg);    
  }

  render() {
    return (
      <View style={styles.container}>               
        <ScrollView style={styles.content}>
          <Text style={styles.textField}>IMC</Text>        
          <TextInput style={styles.input} value={this.state.altura} keyboardType='numeric' placeholder="Entre com sua Altura." onChangeText={(altura) => {this.setState({altura})} } clearButtonMode="always"/>
          <TextInput style={styles.input} value={this.state.peso} keyboardType='numeric' placeholder="Entre com seu Peso."  onChangeText={(peso) => {this.setState({peso})}} clearButtonMode="always"/>
          <TouchableOpacity style={styles.button} title="Calcular" onPress={this.Calcular}>
            <View style={styles.viewButton}>
              <Icon name="calculator" size={26} color="white"/>
              <Text style={styles.textButton}>Calcular</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.result}>{this.state.imc}</Text>          
        </ScrollView>
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
    margin:10
  }, 
  result:{
    margin:10,
    fontSize:30,
    color: 'green',
    alignSelf: 'center',
    fontWeight:'bold'
  },

  button: {
    alignSelf:'center',   
    borderRadius: 7,
    backgroundColor:"#0000CD"     
  },
  content: {
    padding:10,
    margin:20
  },
  viewButton:{
    width:260,
    height:50,
    textAlign: 'center',
    alignItems: 'center',
  },
  textButton: {
    textAlign: 'center',
    color: 'white'
  }
});

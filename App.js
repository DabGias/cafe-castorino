import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Products from './components/Products';

export default function App() {
  const [estado, setEstado] = useState('escolha');

  function preparar() {
    setEstado('fazendo')
    setTimeout(() => {setEstado('pronto')}, 5000)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Caffé Castorino
      </Text>

      <View>
        <Products url="./img/cafe-com-leite.png"/>
        <Products url="./img/cafezin.png"/>
        <Products url="./img/macchiato.png"/>
      </View>

      <Text style={styles.state}>
        {estado == 'escolha' ? 'Escolha um café' : estado == 'fazendo' ? 'Preparando seu pedido' : estado == 'pronto' ? 'Pedido disponível' : ''}
      </Text>

      <View style={styles.viewButtons}>
        <Button
          onPress={() => {
            preparar()
          }}

          title='P'
        />

        <Button
          onPress={() => {
            preparar()
          }}

          title='M'
        />

        <Button
          onPress={() => {
            preparar()
          }}

          title='G'
        />
      </View>

      {estado == 'pronto' ? <Button title='Pedido retirado'/> : ''}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },

  title: {
    marginTop: 20,
    color: '#8f3a15',
    textAlign: 'center',
    fontSize: 40,
  },

  state: {
    marginTop: 30,
    fontSize: 30,
  },

  viewButtons: {
    marginTop: 30,
  }
});

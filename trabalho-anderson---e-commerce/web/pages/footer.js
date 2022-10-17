import * as React from 'react';
import {  View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Tab, Text, TabView } from '@rneui/themed';

export default function Footer() {
  const [index, setIndex] = React.useState(0);
  return(
  <>
    <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'white',
        height: 3,
      }}
      variant="primary"
    >
      <Tab.Item
        title="Vistos Recente"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="Favoritos"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="Carrinho de Compra"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
      />
    </Tab>

    
  </>
  )
}
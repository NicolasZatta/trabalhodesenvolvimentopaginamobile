import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Avatar } from 'react-native-paper';
import { styles } from '../style/style';
import Banner from '../assets/Banner.webp';
import {Image} from '@rneui/themed';
export default function Header() {
  return (
    <>
    <HeaderRNE
      leftComponent={{
        icon: 'menu',
        color: '#fff',
      }}
      rightComponent={
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Icon name="search" type="ionicon" color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Avatar.Image size={24} source={require('../assets/Desodorante.webp')} />
          </TouchableOpacity>
        </View>
      }
      centerComponent={{ text: 'Deso Shop', style: styles.heading }}
    />
      <Image source ={Banner} style={{width:"100%" , height:130}}/>
    </>
  );
}

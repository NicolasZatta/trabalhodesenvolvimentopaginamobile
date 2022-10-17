import * as React from 'react';
import { Avatar, Title, Paragraph } from 'react-native-paper';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import { PricingCard, lightColors } from '@rneui/themed';
import { AirbnbRating } from '@rneui/themed';

import Constants from 'expo-constants';
import DesodoranteC from '../assets/DesodoranteC.webp';
import Desodorante from '../assets/Desodorante.webp'
import DesodoranteF from '../assets/Desodorantefeminino.webp'
import DesodoranteRollon from '../assets/Desodoranterollon.webp'
import { useFonts, RocknRollOne_400Regular } from '@expo-google-fonts/rocknroll-one';

export default function Products() {
let [fontsLoaded] = useFonts({
    RocknRollOne_400Regular,
  });

  return (
    <ScrollView>
      <Card>
        <Card.Title style={{ fontSize: 30}}>Desodorante Rexona Masculino</Card.Title>
        <Card.Divider />
        <Card.Image style={{ height: 240 }} source={Desodorante} />
        <AirbnbRating defaultRating={4.9} count={5} isDisabled={true} />
        <Text style={{ display: "flex" , justifyContent: "center" , fontSize: 30 , fontWeight: "bolder" , fontFamily: "RocknRollOne_400Regular" }}>
          R$53,90
        </Text>

        <Text style={{ marginBottom: 20,marginTop: 20,  }}>
          Desodorante Rexona - 72H de Proteção - Ativado pelo Movimento - 3 unidades 150ml
        </Text>
        <Button
          icon={
            <Icon name="cart" type="ionicon" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Comprar"
        />
      </Card>
            <Card>
        <Card.Title style={{ fontSize: 30}}>Desodorante Rexona Feminino</Card.Title>
        <Card.Divider />
        <Card.Image style={{ height: 300}} source={DesodoranteF} />
        <AirbnbRating defaultRating={4.2} count={5} isDisabled={true}/>
        <Text style={{ display: "flex" , justifyContent: "center" , fontSize: 30 , fontWeight: "bolder" , fontFamily: "RocknRollOne_400Regular" }}>
          R$49,90
        </Text>
        
        <Text style={{ marginBottom: 20,marginTop: 20,  }}>
            Desodorante Rexona Feminino - 48H de Proteção - Ativado pelo Movimento - 3 unidades 150ml
        </Text>
        <Button
          icon={
            <Icon name="cart" type="ionicon" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Comprar"
        />
      </Card>
            <Card>
        <Card.Title style={{ fontSize: 30}}>Desodorante Creme Herbissimo</Card.Title>
        <Card.Divider />
        <Card.Image style={{ height: 300}} source={DesodoranteC} />
        <AirbnbRating defaultRating={2.1} count={5} isDisabled={true}/>
        <Text style={{ display: "flex" , justifyContent: "center" , fontSize: 30 , fontWeight: "bolder" , fontFamily: "RocknRollOne_400Regular" }}>
          R$6,90
        </Text>
        
        <Text style={{ marginBottom: 20,marginTop: 20,  }}>
          Desodorante Creme Antitransparente Tradicional - Unissex - 55G
        </Text>
        <Button
          icon={
            <Icon name="cart" type="ionicon" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Comprar"
        />
      </Card>
            <Card>
        <Card.Title style={{ fontSize: 30}}>Desodorante Feminino Roll On</Card.Title>
        <Card.Divider />
        <Card.Image style={{ height: 300}} source={DesodoranteRollon} />
        <AirbnbRating defaultRating={3.6} count={5} isDisabled={true} />
        <Text style={{ display: "flex" , justifyContent: "center" , fontSize: 30 , fontWeight: "bolder" , fontFamily: "RocknRollOne_400Regular" }}>
          R$9,90
        </Text>
        
        <Text style={{ marginBottom: 20,marginTop: 20,  }}>
          Desodorante Feminino - POWDER - ROLL ON - 50ml
        </Text>
        <Button
          icon={
            <Icon name="cart" type="ionicon" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Comprar"
        />
      </Card>

    </ScrollView>
  );
}


import React from 'react';
import { View } from 'react-native';

import { Feather } from '@expo/vector-icons'; 

import { ContainerButton, Item } from './styles';

export default function ListItem({ data, selectedItem }){
  return(
    <View>
      <ContainerButton 
        activeOpacity={0.85} 
        onPress={ () => selectedItem(data) }
      >
        <Feather 
          name="link"
          color="#fff"
          size={24}
        />
        <Item numberOfLines={1}>{data.long_url}</Item>
      </ContainerButton>
    </View>
  );
}
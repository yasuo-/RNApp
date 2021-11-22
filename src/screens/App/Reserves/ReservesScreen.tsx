import React, {useRef, useState, useEffect} from 'react';
import {
  StyleProp,
  View,
  ViewProps,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TRootStackParamList} from '@/types/rootStack';

type Props = NativeStackScreenProps<TRootStackParamList, 'Reserves'>;
/**
 * ReservesScreen
 * @returns
 */
export const ReservesScreen = ({route, navigation}: Props) => {
  const [visible, setVisible] = React.useState(true);
  const [visible2, setVisible2] = React.useState(route);
  const [visible22, setVisible22] = React.useState(navigation);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Profile', {userId: '7'})}>
      <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </TouchableOpacity>
  );
};

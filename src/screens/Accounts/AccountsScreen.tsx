import React, {useRef, useState, useEffect} from 'react';
import {Image} from 'react-native';
import {Banner} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TRootStackParamList} from '@/types/rootStack';

type Props = NativeStackScreenProps<TRootStackParamList, 'Profile'>;
/**
 * AccountsScreen
 * @param param0
 * @returns
 */
export const AccountsScreen = ({route, navigation}: Props) => {
  const [visible, setVisible] = React.useState(true);
  const [visible2, setVisible2] = React.useState(route);
  const [visible22, setVisible22] = React.useState(navigation);

  return (
    <>
      <Banner
        visible={visible}
        actions={[
          {
            label: 'Fix it',
            onPress: () => setVisible(false),
          },
          {
            label: 'Learn more',
            onPress: () => setVisible(false),
          },
        ]}
        icon={({size}) => (
          <Image
            source={{
              uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
            }}
            style={{
              width: size,
              height: size,
            }}
          />
        )}>
        There was a problem processing a transaction on your credit card.
      </Banner>
    </>
  );
};

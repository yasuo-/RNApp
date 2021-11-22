import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import {Button} from 'react-native-paper';
// import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TRootStackParamList} from '@/types/rootStack';

type Props = NativeStackScreenProps<TRootStackParamList, 'Home'>;

export const ChooseScreen = ({route, navigation}: Props) => {
  return (
    <SafeAreaView style={[{flex: 1, backgroundColor: '#FFF'}]}>
      <View>
        <Text>dddd</Text>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => navigation.navigate('Home')}>
          Press me
        </Button>
      </View>
    </SafeAreaView>
  );
};

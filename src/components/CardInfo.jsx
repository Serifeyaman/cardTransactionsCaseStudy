import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import React from 'react';

import Clipboard from '@react-native-clipboard/clipboard';

import {Icons} from '@app/components';
import {useTheme} from '@app/lib';

const CardInfo = () => {
  const {theme} = useTheme();

  const handleTextCopy = text => {
    Clipboard.setString(text);

    if (Platform.OS === 'android') {
      ToastAndroid.show(`${text} Kopyalandı`, ToastAndroid.SHORT);
    } else {
      Alert.alert('Kopyalama Başarılı', `${text} kopyalandı`);
      // ToastAndroid.show()
    }
  };

  return (
    <View className="px-5 py-5 border-t-2 border-secondary space-y-2 ">
      <Text className="text-base font-medium !text-description">
        Kart Bilgileri
      </Text>
      <View style={{borderColor: theme.colors.secondary}} className="bg-white rounded-xl border-2 border-secondary">
        {/* card number */}
        <View className="flex-row items-center border-b-2 border-secondary p-3">
          <View className="p-2 rounded-full bg-background mr-5">
            <Icons.Union color={theme.colors.primary} />
          </View>
          <Text className="text-sm font-medium !text-description mr-9">
            4310 1030 3000 9530
          </Text>
          <TouchableOpacity
            onPress={() => handleTextCopy('4310 1030 3000 9530')}>
            <Icons.Copy color={theme.colors.dark_secondary} />
          </TouchableOpacity>
        </View>
        {/* card back  */}
        <View className="flex-row space-x-8 p-3">
          <View className="flex-col">
            <View className="flex-row">
              <View className="p-2 rounded-full bg-background mr-5">
                <Icons.UnionDate color={theme.colors.primary} />
              </View>
              <Text className="text-sm font-medium !text-description">
                10 / 26
              </Text>
            </View>
          </View>

          <View className="flex-col">
            <View className="flex-row">
              <View className="p-2 rounded-full bg-background mr-3">
                <Icons.UnionCvv color={theme.colors.primary} />
              </View>
              <Text className="text-sm font-medium !text-description mr-7">
                430
              </Text>
              <TouchableOpacity
                onPress={() => handleTextCopy('430')}>
                <Icons.Copy color={theme.colors.dark_secondary} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardInfo;

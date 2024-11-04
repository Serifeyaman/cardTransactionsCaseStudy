import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import React from 'react';

import Clipboard from '@react-native-clipboard/clipboard';

import {Icons} from '@app/components';

const CardInfo = () => {
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
    <View className="px-5 py-5 border-t-2 border-[#edf1f2] space-y-2 ">
      <Text className="text-base font-medium text-[#151718]">
        Kart Bilgileri
      </Text>
      <View className="bg-white rounded-xl border-2 border-[#edf1f2]">
        {/* card number */}
        <View className="flex-row items-center border-b-2 border-[#edf1f2] p-3">
          <View className="p-2 rounded-full bg-[#F5F6F7] mr-5">
            <Icons.Union color="#E13915" />
          </View>
          <Text className="text-sm font-medium text-[#151718] mr-9">
            4310 1030 3000 9530
          </Text>
          <TouchableOpacity
            onPress={() => handleTextCopy('4310 1030 3000 9530')}>
            <Icons.Copy color="#313538" />
          </TouchableOpacity>
        </View>
        {/* card back  */}
        <View className="flex-row space-x-8 p-3">
          <View className="flex-col">
            <View className="flex-row">
              <View className="p-2 rounded-full bg-[#F5F6F7] mr-5">
                <Icons.UnionDate color="#E13915" />
              </View>
              <Text className="text-sm font-medium text-[#151718]">
                10 / 26
              </Text>
            </View>
          </View>

          <View className="flex-col">
            <View className="flex-row">
              <View className="p-2 rounded-full bg-[#F5F6F7] mr-3">
                <Icons.UnionCvv color="#E13915" />
              </View>
              <Text className="text-sm font-medium text-[#151718] mr-7">
                430
              </Text>
              <TouchableOpacity
                onPress={() => handleTextCopy('430')}>
                <Icons.Copy color="#313538" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardInfo;

import {View, Text} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

import {Icons} from '@app/components';

const CardInfoBanner = () => {
  const currency = '25.320,50';

  return (
    <LinearGradient
      colors={['#FFFFFF', '#f2e7e4', '#f5e0da']}
      start={{x: 0.4, y: 0.1}}
      end={{x: 0.4, y: 0.9}}
      locations={[0.1, 0.6, 0.8]}
      className="h-1/3 w-full px-20">
      <LinearGradient
        className="w-full h-3/5 top-[107px] rounded-t-xl p-5 justify-between shadow-xl"
        colors={['#EF4A15', '#FFFFFF', '#EF4A15']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        locations={[0.4, 1, 0.7]}>
        <View className="flex-row justify-between items-center">
          <Text className="text-white text-sm font-bold">Wedeal</Text>
          <Text className="text-white text-xs font-bold">PREMIUM</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <View className="flex-1 space-y-2">
            <Text className="text-white text-xs font-light">Kart Bakiyesi</Text>
            <Text className="flex-col text-2xl font-medium text-white">
              {currency.split(',')[0]}.
              <Text className="!text-base ">{currency.split(',')[1]}₺</Text>
            </Text>
          </View>
          <Icons.Sign />
        </View>
      </LinearGradient>
    </LinearGradient>
  );
};

export default CardInfoBanner;

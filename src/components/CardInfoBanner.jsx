import {View, Text} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

import {Icons} from '@app/components';
import {useTheme} from '@app/lib';

const CardInfoBanner = () => {
  const currency = '25.320,50';
  const {theme} = useTheme();

  return (
    <LinearGradient
      colors={[
        theme.creadit_card_colors.bg_gradient.light,
        theme.creadit_card_colors.bg_gradient.transition,
        theme.creadit_card_colors.bg_gradient.primary,
      ]}
      start={{x: 0.4, y: 0.1}}
      end={{x: 0.4, y: 0.9}}
      locations={[0.1, 0.6, 0.8]}
      className="h-1/3 w-full px-20">
      <LinearGradient
        className="w-full h-3/5 top-[107px] rounded-t-xl p-5 justify-between shadow-xl"
        colors={[
          theme.creadit_card_colors.light,
          theme.creadit_card_colors.transition,
          theme.creadit_card_colors.primary,
        ]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        locations={[0.4, 1, 0.7]}>
        <View className="flex-row justify-between items-center">
          <Text className="text-creadit_card_description text-xs font-bold">Wedeal</Text>
          <Text className="text-creadit_card_description text-xs font-bold">PREMIUM</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <View className="flex-1 space-y-2">
            <Text className="text-creadit_card_description text-xs font-light">Kart Bakiyesi</Text>
            <Text className="flex-col text-2xl font-medium text-creadit_card_description">
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

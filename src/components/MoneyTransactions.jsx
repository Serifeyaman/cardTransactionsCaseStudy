import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {Icons} from '@app/components';
import {useTheme} from '@app/lib';

const MoneyTransactions = () => {
  const {theme} = useTheme();
  return (
    <View className="flex-row space-x-3 justify-center py-3 bg-background">
      <TouchableOpacity
        className="flex-row justify-center space-x-2 px-4 py-3 rounded-xl w-1/3 bg-primary_button_bg"
        onPress={() => {}}>
        <Icons.QR color={theme.colors.primary_button_text} />
        <Text className="text-primary_button_text text-sm font-medium">
          QR ile öde
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row justify-center space-x-2 px-4 py-3 rounded-xl w-1/3 bg-primary_button_bg">
        <Icons.Money color={theme.colors.primary_button_text} />
        <Text className="text-primary_button_text text-sm font-medium">
          Para yükle
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MoneyTransactions;

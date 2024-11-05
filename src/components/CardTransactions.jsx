import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import classNames from 'classnames';

import {Icons} from '@app/components';
import {useTheme} from '@app/lib';

const Item = ({count, id, icon, storeName, date, amount}) => (
  <View
    className={classNames(
      'flex-row items-center justify-between py-3 border-b-[1px] border-secondary',
      id === count && '!border-white',
    )}>
    <View className="flex-col">
      <View className="flex-row">
        <View className="p-2 rounded-full bg-background mr-5">{icon}</View>
        <View>
          <Text className="text-sm font-medium !text-description mr-9">
            {storeName}
          </Text>
          <Text className="text-xs font-normal !text-light_secondary">
            {date}
          </Text>
        </View>
      </View>
    </View>
    <Text className="flex-col text-sm font-medium !text-description">
      {amount.toFixed(2).split('.')[0]}.
      <Text className="!text-xs ">{amount.toFixed(2).split('.')[1]}₺</Text>
    </Text>
  </View>
);

const CardTransactions = () => {
  const {theme} = useTheme();
  const CARD_TRANSACTIONS = [
    {
      id: 1,
      icon: <Icons.Clothing color={theme.colors.primary} />,
      storeName: 'LC Waikiki Mağazacılık H..',
      amount: -1304.43,
      date: '30.03.2024',
      category: 'Giyim',
    },
    {
      id: 2,
      icon: <Icons.Food color={theme.colors.primary} />,
      storeName: "Happy Moon's Grup",
      amount: -310.0,
      date: '30.03.2024',
      category: 'Yemek',
    },
    {
      id: 3,
      icon: <Icons.Clothing color={theme.colors.primary} />,
      storeName: 'Zara',
      amount: -150.75,
      date: '20.10.2024',
      category: 'Giyim',
    },
    {
      id: 4,
      icon: <Icons.Food color={theme.colors.primary} />,
      storeName: 'Starbucks',
      amount: -25.5,
      date: '22.10.2024',
      category: 'Yemek',
    },
    {
      id: 5,
      icon: <Icons.Food color={theme.colors.primary} />,
      storeName: 'Migros',
      amount: -200.0,
      date: '25.10.2024',
      category: 'Market',
    },
    {
      id: 6,
      icon: <Icons.Union color={theme.colors.primary} />,
      storeName: 'Apple Store',
      amount: -1250.0,
      date: '28.10.2024',
      category: 'Elektronik',
    },
    {
      id: 7,
      icon: <Icons.Food color={theme.colors.primary} />,
      storeName: 'Burger King',
      amount: -40.0,
      date: '01.11.2024',
      category: 'Yemek',
    },
    {
      id: 8,
      icon: <Icons.Clothing color={theme.colors.primary} />,
      storeName: 'Decathlon',
      amount: -320.0,
      date: '03.11.2024',
      category: 'Spor',
    },
    {
      id: 9,
      icon: <Icons.Clothing color={theme.colors.primary} />,
      storeName: 'LC Waikiki',
      amount: -85.0,
      date: '03.11.2024',
      category: 'Giyim',
    },
    {
      id: 10,
      icon: <Icons.Union color={theme.colors.primary} />,
      storeName: 'Bim',
      amount: -120.5,
      date: '04.11.2024',
      category: 'Market',
    },
    {
      id: 11,
      icon: <Icons.Clothing color={theme.colors.primary} />,
      storeName: 'Mavi',
      amount: -60.0,
      date: '04.11.2024',
      category: 'Giyim',
    },
    {
      id: 12,
      icon: <Icons.Food color={theme.colors.primary} />,
      storeName: 'Popeyes',
      amount: -35.0,
      date: '04.11.2024',
      category: 'Yemek',
    },
  ];

  const [visibleData, setVisibleData] = useState(CARD_TRANSACTIONS.slice(0, 2));

  const handleShowAll = () => {
    setVisibleData(CARD_TRANSACTIONS);
  };

  return (
    <>
      <View className="flex-row justify-between px-5">
        <Text
          className="text-base font-medium !text-description">
          Kart Hareketleri
        </Text>
        <TouchableOpacity
          className="flex-row justify-center border-2 border-secondary px-3 py-2 rounded-lg w-auto bg-white"
          onPress={() => handleShowAll()}>
          <Text className="text-sm font-medium !text-description">Tümü</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        contentContainerStyle={styles.container}
        data={visibleData}
        renderItem={({item}) => (
          <Item
            count={visibleData.length}
            id={item.id}
            icon={item.icon}
            storeName={item.storeName}
            date={item.date}
            amount={item.amount}
          />
        )}
        keyExtractor={item => item.id}
      />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    margin: 20,
    marginTop: 10,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#EDF1F2',
  },
});

export default CardTransactions;

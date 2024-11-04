import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import classNames from 'classnames';

import {Icons} from '@app/components';

const CARD_TRANSACTIONS = [
  {
    id: 1,
    icon: <Icons.Clothing color="#E13915" />,
    storeName: 'LC Waikiki Mağazacılık H..',
    amount: -1304.43,
    date: '30.03.2024',
    category: 'Giyim',
  },
  {
    id: 2,
    icon: <Icons.Food color="#E13915" />,
    storeName: "Happy Moon's Grup",
    amount: -310.0,
    date: '30.03.2024',
    category: 'Yemek',
  },
  {
    id: 3,
    icon: <Icons.Clothing color="#E13915" />,
    storeName: 'Zara',
    amount: -150.75,
    date: '20.10.2024',
    category: 'Giyim',
  },
  {
    id: 4,
    icon: <Icons.Food color="#E13915" />,
    storeName: 'Starbucks',
    amount: -25.5,
    date: '22.10.2024',
    category: 'Yemek',
  },
  {
    id: 5,
    icon: <Icons.Food color="#E13915" />,
    storeName: 'Migros',
    amount: -200.0,
    date: '25.10.2024',
    category: 'Market',
  },
  {
    id: 6,
    icon: <Icons.Union color="#E13915" />,
    storeName: 'Apple Store',
    amount: -1250.0,
    date: '28.10.2024',
    category: 'Elektronik',
  },
  {
    id: 7,
    icon: <Icons.Food color="#E13915" />,
    storeName: 'Burger King',
    amount: -40.0,
    date: '01.11.2024',
    category: 'Yemek',
  },
  {
    id: 8,
    icon: <Icons.Clothing color="#E13915" />,
    storeName: 'Decathlon',
    amount: -320.0,
    date: '03.11.2024',
    category: 'Spor',
  },
  {
    id: 9,
    icon: <Icons.Clothing color="#E13915" />,
    storeName: 'LC Waikiki',
    amount: -85.0,
    date: '03.11.2024',
    category: 'Giyim',
  },
  {
    id: 10,
    icon: <Icons.Union color="#E13915" />,
    storeName: 'Bim',
    amount: -120.5,
    date: '04.11.2024',
    category: 'Market',
  },
  {
    id: 11,
    icon: <Icons.Clothing color="#E13915" />,
    storeName: 'Mavi',
    amount: -60.0,
    date: '04.11.2024',
    category: 'Giyim',
  },
  {
    id: 12,
    icon: <Icons.Food color="#E13915" />,
    storeName: 'Popeyes',
    amount: -35.0,
    date: '04.11.2024',
    category: 'Yemek',
  },
];

const Item = ({count, id, icon, storeName, date, amount}) => (
  <View
    className={classNames(
      'flex-row items-center justify-between py-3 border-b-[1px] border-[#edf1f2]',
      id === count && '!border-white',
    )}>
    <View className="flex-col">
      <View className="flex-row">
        <View className="p-2 rounded-full bg-[#F5F6F7] mr-5">{icon}</View>
        <View>
          <Text className="text-sm font-medium text-[#151718] mr-9">
            {storeName}
          </Text>
          <Text className="text-xs font-normal text-[#697177]">{date}</Text>
        </View>
      </View>
    </View>
    <Text className="flex-col text-sm font-medium text-[#151718]">
      {amount.toFixed(2).split(".")[0]}.<Text className="!text-xs ">{amount.toFixed(2).split(".")[1]}₺</Text>
    </Text>
  </View>
);

const CardTransactions = () => {
  const [visibleData, setVisibleData] = useState(CARD_TRANSACTIONS.slice(0, 2));

  const handleShowAll = () => {
    setVisibleData(CARD_TRANSACTIONS);
  };

  return (
    <>
      <View className="flex-row justify-between px-5">
        <Text className="text-base font-medium text-[#151718]">
          Kart Hareketleri
        </Text>
        <TouchableOpacity
          className="flex-row justify-center border-2 border-[#EDF1F2] px-2 py-1 rounded-lg w-auto bg-white"
          onPress={() => handleShowAll()}>
          <Text className="text-base font-medium color-[#151718]">Tümü</Text>
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
    borderWidth:2,
    borderColor: '#edf1f2',
  },
});

export default CardTransactions;

import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

import {
  CardInfoBanner,
  MoneyTransactions,
  CardInfo,
  CardTransactions,
} from '@app/components';
import {useTheme} from '@app/lib';

const Cards = () => {
  const {theme} = useTheme();

  return (
    <>
      <CardInfoBanner />
      <SafeAreaView style={styles.container}>
        <MoneyTransactions />
        <CardInfo />
        <CardTransactions />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#f5f6f7',
  },
});

export default Cards;

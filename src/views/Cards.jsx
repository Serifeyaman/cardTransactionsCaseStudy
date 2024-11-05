import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import React from 'react';

import {
  CardInfoBanner,
  MoneyTransactions,
  CardInfo,
  CardTransactions,
} from '@app/components';
import LinearGradient from 'react-native-linear-gradient';

const Cards = () => {
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

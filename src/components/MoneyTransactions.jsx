import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {Icons} from '@app/components'

const MoneyTransactions = () => {
    return (
        <View className="flex-row space-x-3 justify-center">
            <TouchableOpacity className="flex-row justify-center space-x-2 px-4 py-3 rounded-xl w-1/3 bg-[#ef4a15]" onPress={() =>{}}>
                <Icons.QR color="white" />
                <Text className="text-white text-sm font-medium">QR ile öde</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row justify-center space-x-2 px-4 py-3 rounded-xl w-1/3 bg-[#ef4a15]" >
                <Icons.Money color="white" />
                <Text className="text-white text-sm font-medium">Para yükle</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MoneyTransactions
import React from 'react';
import { View, Text, FlatList, SafeAreaView, Image, StatusBar } from 'react-native';
import { mockCars } from '../../data/mockCars';
import { Car } from '../../types';
import { COLORS } from '../../constants/theme';

const WantedItem = ({ item }: { item: Car }) => (
  <View className="flex-row items-center bg-lightWhite p-3 rounded-lg shadow-sm mb-3">
    <Image
      source={item.photo}
      className="w-20 h-20 rounded-md"
      resizeMode="cover"
    />
    <View className="flex-1 ml-4">
      <Text className="text-secondary font-bold text-base">{item.name}</Text>
      <Text className="text-gray-600 text-sm mt-1">{item.series}</Text>
    </View>
  </View>
);

const WantedScreen = () => {
  // Demo için arananlar listesi olarak mock datanın bir kısmını kullanıyoruz.
  const wantedCars = mockCars.slice(0, 4);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <StatusBar barStyle="dark-content" />
      <View className="flex-1 px-4 pt-4">
        <Text className="text-secondary text-3xl font-bold mb-2">Arananlar Listesi</Text>
        <Text className="text-gray-700 mb-4">
          Bu listedeki bir araç Pazaryeri'ne eklendiğinde anında bildirim alırsınız.
        </Text>
        <FlatList
          data={wantedCars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <WantedItem item={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default WantedScreen;
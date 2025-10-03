import React from 'react';
import { View, Text, FlatList, SafeAreaView, Image } from 'react-native';
import { mockCars } from '../../data/mockCars';
import { Car } from '../../types';
import { COLORS } from '../../constants/theme';

const WantedItem = ({ item }: { item: Car }) => (
  <View className="flex-row items-center bg-lightWhite p-3 rounded-lg shadow-sm mb-3">
    <Image
      source={{ uri: item.photoUrl }}
      className="w-16 h-16 rounded-md"
      resizeMode="cover"
    />
    <View className="ml-4">
      <Text className="text-secondary font-bold text-base">{item.name}</Text>
      <Text className="text-gray text-sm">{item.series}</Text>
    </View>
  </View>
);

const WantedScreen = () => {
  // For demonstration, we'll show a slice of the mock cars as "wanted".
  const wantedCars = mockCars.slice(0, 3);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View className="flex-1 p-4">
        <Text className="text-secondary text-2xl font-bold mb-4">Arananlar Listesi</Text>
        <Text className="text-gray mb-4">
          Bu listedeki bir araç Pazaryeri'ne eklendiğinde anında bildirim alırsınız.
        </Text>
        <FlatList
          data={wantedCars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <WantedItem item={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default WantedScreen;
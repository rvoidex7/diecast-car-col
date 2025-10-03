import React from 'react';
import { View, Text, FlatList, SafeAreaView, Image, StatusBar } from 'react-native';
import { mockCars } from '../../data/mockCars';
import { Car } from '../../types';
import { COLORS } from '../../constants/theme';

// Kart bileşeni, daha iyi yeniden kullanılabilirlik için dışarıda tutulabilir, ancak şimdilik burada.
const CollectionCard = ({ item }: { item: Car }) => (
  <View className="flex-1 bg-lightWhite rounded-lg shadow-sm overflow-hidden m-1.5">
    <Image
      source={item.photo}
      className="w-full h-24"
      resizeMode="cover"
    />
    <View className="p-2">
      <Text className="text-secondary font-bold text-sm" numberOfLines={1}>
        {item.name}
      </Text>
      <Text className="text-gray-600 text-xs mt-1">{item.series}</Text>
    </View>
  </View>
);

const MyCollectionScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <StatusBar barStyle="dark-content" />
      <View className="flex-1 px-4 pt-4">
        <Text className="text-secondary text-3xl font-bold mb-4">Koleksiyonum</Text>
        <FlatList
          data={mockCars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CollectionCard item={item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyCollectionScreen;
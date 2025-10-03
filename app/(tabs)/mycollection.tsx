import React from 'react';
import { View, Text, FlatList, SafeAreaView, Image, Dimensions } from 'react-native';
import { mockCars } from '../../data/mockCars';
import { Car } from '../../types';
import { COLORS } from '../../constants/theme';

const { width } = Dimensions.get('window');
const cardWidth = width / 2 - 24; // 2 columns with padding

const CollectionCard = ({ item }: { item: Car }) => (
  <View className="bg-lightWhite rounded-lg p-3 shadow-sm" style={{ width: cardWidth, marginBottom: 16 }}>
    <Image
      source={{ uri: item.photoUrl }}
      className="w-full h-24 rounded-md"
      resizeMode="cover"
    />
    <Text className="text-secondary font-bold mt-2 text-sm" numberOfLines={1}>
      {item.name}
    </Text>
    <Text className="text-gray text-xs">{item.series}</Text>
  </View>
);

const MyCollectionScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View className="flex-1 p-4">
        <Text className="text-secondary text-2xl font-bold mb-4">Koleksiyonum</Text>
        <FlatList
          data={mockCars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CollectionCard item={item} />}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyCollectionScreen;
import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import ListingCard from '../../components/ListingCard';
import SearchBar from '../../components/SearchBar';
import { COLORS } from '../../constants/theme';

const mockListings = [
  {
    id: '1',
    name: 'Bone Shaker',
    series: 'HW Art Cars',
    price: '$2.50',
    seller: 'hotwheels_fan',
    imageUrl: 'https://static.wikia.nocookie.net/hotwheels/images/c/c2/Bone_Shaker_2022_HW_Art_Cars.jpg/revision/latest/scale-to-width-down/350?cb=20211110222',
  },
  {
    id: '2',
    name: 'Twin Mill',
    series: 'HW Dream Garage',
    price: '$3.00',
    seller: 'collector22',
    imageUrl: 'https://static.wikia.nocookie.net/hotwheels/images/8/8a/Twin_Mill_HCT39.jpg/revision/latest/scale-to-width-down/350?cb=20220102002',
  },
  {
    id: '3',
    name: 'Deora II',
    series: "HW Surf's Up",
    price: '$2.00',
    seller: 'beach_racer',
    imageUrl: 'https://static.wikia.nocookie.net/hotwheels/images/a/a2/Deora_II_-_2021.jpg/revision/latest/scale-to-width-down/350?cb=20210313010',
  },
  {
    id: '4',
    name: "'67 Camaro",
    series: 'Muscle Mania',
    price: '$4.50',
    seller: 'classic_cars',
    imageUrl: 'https://static.wikia.nocookie.net/hotwheels/images/e/e5/%2767_Camaro_grn.JPG/revision/latest/scale-to-width-down/350?cb=20081203013',
  },
];

const MarketplaceScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: COLORS.lightWhite }}>
      <FlatList
        data={mockListings}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View className="px-4 pt-4">
            <Text className="mb-2 text-3xl font-bold text-secondary">Pazaryeri</Text>
            <SearchBar
              placeholder="Model, seri veya satıcı ara..."
            />
          </View>
        }
        renderItem={({ item }) => (
          <View className="px-4">
            <ListingCard listing={item} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default MarketplaceScreen;
import React, { useState } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import ListingCard from '../../components/ListingCard';
import SearchBar from '../../components/SearchBar';
import { COLORS } from '../../constants/theme';

// Jules'un hazırladığı daha gerçekçi mock datayı kullanalım
const mockListings = [
  {
    id: '1',
    name: 'Bone Shaker',
    series: 'HW Art Cars',
    price: '$2.50',
    seller: 'hotwheels_fan',
    imageUrl: 'https://static.wikia.nocookie.net/hotwheels/images/c/c2/Bone_Shaker_2022_HW_Art_Cars.jpg/revision/latest/scale-to-width-down/350?cb=20211110222 Bone Shaker',
  },
  {
    id: '2',
    name: 'Twin Mill',
    series: 'HW Dream Garage',
    price: '$3.00',
    seller: 'collector22',
    imageUrl: 'https://static.wikia.nocookie.net/hotwheels/images/8/8a/Twin_Mill_HCT39.jpg/revision/latest/scale-to-width-down/350?cb=20220102002 Twin Mill',
  },
  {
    id: '3',
    name: 'Deora II',
    series: "HW Surf's Up",
    price: '$2.00',
    seller: 'beach_racer',
    imageUrl: 'https://static.wikia.nocookie.net/hotwheels/images/a/a2/Deora_II_-_2021.jpg/revision/latest/scale-to-width-down/350?cb=20210313010 Deora II',
  },
  {
    id: '4',
    name: "'67 Camaro",
    series: 'Muscle Mania',
    price: '$4.50',
    seller: 'classic_cars',
    imageUrl: 'https://static.wikia.nocookie.net/hotwheels/images/e/e5/%2767_Camaro_grn.JPG/revision/latest/scale-to-width-down/350?cb=20081203013 \'67 Camaro',
  },
];

const MarketplaceScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: COLORS.lightWhite }}>
      <FlatList
        data={mockListings}
        keyExtractor={(item) => item.id}
        // Hem başlığı hem de SearchBar'ı listenin başına ekleyelim
        ListHeaderComponent={
          <View className="px-4 pt-4">
            <Text className="text-2xl font-bold text-secondary">Pazaryeri</Text>
            <SearchBar
              placeholder="Model, seri veya satıcı ara..."
            />
          </View>
        }
        // Artık ListingCard component'ini kullanıyoruz
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
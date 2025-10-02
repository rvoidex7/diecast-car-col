import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';

// Note: As per instructions, theme constants are not used directly.
// We rely on NativeWind classes which are configured in global.css
// based on the values in /constants/theme.js

const mockListings = [
  {
    id: '1',
    name: '85 Honda City Turbo II',
    series: 'HW Turbo',
    price: '120 TL',
    seller: 'koleksiyoner_ali',
    imageUrl: 'https://via.placeholder.com/150/FF6347/FFFFFF?text=Honda',
  },
  {
    id: '2',
    name: 'Porsche 911 Carrera RS 2.7',
    series: 'HW Race Day',
    price: 'Takas',
    seller: 'garaj_veli',
    imageUrl: 'https://via.placeholder.com/150/444262/FFFFFF?text=Porsche',
  },
  {
    id: '3',
    name: 'Nissan Skyline GT-R (BNR32)',
    series: 'HW J-Imports',
    price: '250 TL',
    seller: 'diecast_turkiye',
    imageUrl: 'https://via.placeholder.com/150/FF7754/FFFFFF?text=Skyline',
  },
  {
    id: '4',
    name: '70 Dodge Charger R/T',
    series: 'HW Art Cars',
    price: '95 TL',
    seller: 'modelci_ahmet',
    imageUrl: 'https://via.placeholder.com/150/83829A/FFFFFF?text=Dodge',
  },
];

const MarketplaceScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-lightWhite">
      <View className="p-4">
        <Text className="text-2xl font-bold text-secondary">
          Pazaryeri
        </Text>

        <FlatList
          data={mockListings}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<View className="h-4" />}
          renderItem={({ item }) => (
            <View className="bg-white p-3 rounded-lg mb-4 shadow-md">
              <Text className="font-bold text-lg">{item.name}</Text>
              <Text className="text-primary">Fiyat: {item.price}</Text>
              <Text>Satıcı: {item.seller}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default MarketplaceScreen;
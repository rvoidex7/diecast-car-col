import React from 'react';
import { View, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import ListingCard from '../../components/ListingCard';
import { COLORS } from '../../constants/theme';

const mockListings = [
  {
    id: '1',
    name: 'Bone Shaker',
    series: 'HW Art Cars',
    price: '$2.50',
    seller: 'hotwheels_fan',
    imageUrl: 'https://static.wikia.nocookie.net/hotwheels/images/c/c2/Bone_Shaker_2022_HW_Art_Cars.jpg',
  },
  {
    id: '2',
    name: 'Twin Mill',
    series: 'HW Dream Garage',
    price: '$3.00',
    seller: 'collector22',
    imageUrl: 'https://static.wikia.nocookie.net/hotwheels/images/8/8a/Twin_Mill_HCT39.jpg',
  },
  {
    id: '3',
    name: 'Deora II',
    series: "HW Surf's Up",
    price: '$2.00',
    seller: 'beach_racer',
    imageUrl: 'https://static.wikia.nocookie.net/hotwheels/images/a/a2/Deora_II_-_2021.jpg',
  },
  {
    id: '4',
    name: "'67 Camaro",
    series: 'Muscle Mania',
    price: '$4.50',
    seller: 'classic_cars',
    imageUrl: 'https://static.wikia.nocookie.net/hotwheels/images/e/e5/%2767_Camaro_grn.JPG',
  },
];


export default function MarketplaceScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mockListings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ListingCard listing={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  listContent: {
    padding: 16,
  },
});
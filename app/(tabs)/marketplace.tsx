import React from 'react';
import { View, FlatList, SafeAreaView, Text, StatusBar } from 'react-native';
import { mockListings } from '../../data/mockListings';
import SearchBar from '../../components/common/SearchBar';
import ListingCard from '../../components/common/ListingCard';
import { COLORS } from '../../constants/theme';

const MarketplaceScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <StatusBar barStyle="dark-content" />
      <View className="flex-1 px-4 pt-4">
        <Text className="text-secondary text-3xl font-bold mb-2">Pazaryeri</Text>

        <SearchBar />

        <FlatList
          data={mockListings}
          keyExtractor={(item) => item.listingId}
          renderItem={({ item }) => <ListingCard listing={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default MarketplaceScreen;
import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import SearchBar from '../../components/SearchBar';

const MarketplaceScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={
          <>
            <Text className="text-2xl font-bold text-secondary">Pazaryeri</Text>
            <SearchBar placeholder="Model ara..." />
          </>
        }
        data={[]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default MarketplaceScreen;
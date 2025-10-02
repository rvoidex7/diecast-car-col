import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

const ListingCard = ({ listing }) => {
  return (
    <TouchableOpacity className="flex-row bg-white p-3 rounded-xl shadow-md mb-4 items-center">
      <Image
        source={{ uri: listing.imageUrl }}
        className="w-24 h-24 rounded-lg mr-4"
      />
      <View className="flex-1">
        <Text className="text-base font-bold text-secondary">{listing.name}</Text>
        <Text className="text-sm text-gray-600">{listing.series}</Text>
        <Text className="text-xs text-gray-500 mt-1">@{listing.seller}</Text>
        <Text className="text-lg font-extrabold text-primary mt-2">{listing.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListingCard;
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

type Listing = {
  id: string;
  name: string;
  series: string;
  price: string;
  seller: string;
  imageUrl: string;
};

type ListingCardProps = {
  listing: Listing;
  onPress?: () => void;
};

export default function ListingCard({ listing, onPress }: ListingCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      className="mb-4 flex-row items-center rounded-2xl border border-gray-100 bg-white p-4 shadow-md"
    >
      <Image
        source={{ uri: listing.imageUrl }}
        className="mr-4 h-24 w-24 rounded-xl"
      />

      <View className="flex-1 gap-1.5">
        <Text className="text-base font-bold text-secondary">{listing.name}</Text>
        <Text className="text-sm text-gray-600">{listing.series}</Text>
        <Text className="text-xs uppercase tracking-wide text-gray">@{listing.seller}</Text>
        <Text className="text-lg font-extrabold text-primary">{listing.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

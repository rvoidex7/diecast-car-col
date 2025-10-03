import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Listing } from '../../types';
import { COLORS, SIZES } from '../../constants/theme';

interface ListingCardProps {
  listing: Listing;
  onPress?: () => void;
}

const ListingCard = ({ listing, onPress }: ListingCardProps) => {
  const { car, sellerUsername, price, type } = listing;

  return (
    <TouchableOpacity
      className="flex-row bg-lightWhite p-4 rounded-xl shadow-md mb-4"
      onPress={onPress}
    >
      {/* Image */}
      <Image
        source={{ uri: car.photoUrl }}
        className="w-24 h-24 rounded-lg"
        resizeMode="cover"
      />

      {/* Info */}
      <View className="flex-1 ml-4 justify-between">
        <View>
          <Text className="text-secondary font-bold text-lg" numberOfLines={1}>
            {car.name}
          </Text>
          <Text className="text-gray text-sm">{car.series}</Text>
        </View>

        <View className="flex-row items-center mt-2">
          <Ionicons name="person-circle-outline" size={SIZES.small} color={COLORS.gray} />
          <Text className="text-gray ml-1 text-xs">{sellerUsername}</Text>
        </View>

        <View>
          <Text className="text-primary font-bold text-xl mt-1">
            {type === 'sale' ? `${price} TL` : 'Takas'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListingCard;
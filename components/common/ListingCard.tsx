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
      className="flex-row bg-lightWhite p-3 rounded-lg shadow-sm mb-4"
      onPress={onPress}
    >
      {/* Resim Alanı */}
      <Image
        source={car.photo}
        className="w-28 h-28 rounded-md"
        resizeMode="cover"
      />

      {/* Bilgi Alanı */}
      <View className="flex-1 ml-4 justify-between">
        {/* Model ve Seri */}
        <View>
          <Text className="text-secondary font-bold text-base" numberOfLines={2}>
            {car.name}
          </Text>
          <Text className="text-gray-600 text-xs mt-1">{car.series}</Text>
        </View>

        {/* Satıcı ve Fiyat */}
        <View className="mt-2">
          <View className="flex-row items-center">
            <Ionicons name="person-circle-outline" size={SIZES.small} color={COLORS.gray} />
            <Text className="text-gray-700 ml-1 text-xs">{sellerUsername}</Text>
          </View>
          <Text className="text-primary font-bold text-lg mt-1">
            {type === 'sale' ? `${price} TL` : 'Takas'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListingCard;
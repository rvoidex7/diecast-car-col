import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import { Listing } from '../../types';
import Badge from './Badge';

interface ListingCardProps {
  listing: Listing;
  onPress?: () => void;
}

const ListingCard = ({ listing, onPress }: ListingCardProps) => {
  const { car, sellerUsername, price, type, postedAt, location, watchers, isFeatured, tags } = listing;

  return (
    <TouchableOpacity
      className="bg-white rounded-3xl overflow-hidden border border-lightWhite/60 shadow-sm mb-5"
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View className="relative">
        <Image
          source={car.photo}
          className="w-full h-40"
          resizeMode="cover"
        />
        <View className="absolute top-3 left-3 flex-row gap-2">
          <Badge
            label={type === 'sale' ? 'Satılık' : 'Takas'}
            variant={type === 'sale' ? 'primary' : 'outline'}
            size="sm"
          />
          {isFeatured && <Badge label="Öne çıkan" variant="success" size="sm" />}
        </View>
        {postedAt && (
          <View className="absolute top-3 right-3 bg-secondary/80 px-3 py-1 rounded-full">
            <Text className="text-white text-xs font-semibold">{postedAt}</Text>
          </View>
        )}
      </View>

      <View className="p-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-1 pr-2">
            <Text className="text-secondary font-bold text-lg" numberOfLines={1}>
              {car.name}
            </Text>
            <Text className="text-gray text-sm" numberOfLines={1}>
              {car.series}
            </Text>
          </View>
          <Text className="text-primary font-bold text-xl">
            {type === 'sale' ? `${price} TL` : 'Takas Açık'}
          </Text>
        </View>

        {tags && tags.length > 0 && (
          <View className="flex-row flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <Badge key={tag} label={`#${tag}`} variant="outline" size="sm" />
            ))}
          </View>
        )}

        <Text className="text-gray mt-3" numberOfLines={2}>
          {listing.description}
        </Text>

        <View className="flex-row items-center justify-between mt-4">
          <View className="flex-row items-center">
            <Ionicons name="person-circle-outline" size={SIZES.large} color={COLORS.secondary} />
            <Text className="text-secondary font-semibold ml-2">{sellerUsername}</Text>
          </View>
          {location && (
            <View className="flex-row items-center">
              <Ionicons name="location-outline" size={SIZES.small} color={COLORS.gray} />
              <Text className="text-gray text-xs ml-1" numberOfLines={1}>
                {location}
              </Text>
            </View>
          )}
        </View>

        {watchers !== undefined && (
          <View className="flex-row items-center justify-between mt-3">
            <View className="flex-row items-center">
              <Ionicons name="eye-outline" size={SIZES.small} color={COLORS.gray} />
              <Text className="text-gray text-xs ml-1">{watchers}+ görüntülenme</Text>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="shield-checkmark-outline" size={SIZES.small} color={COLORS.primary} />
              <Text className="text-primary text-xs ml-1">Güvenli Ticaret</Text>
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ListingCard;
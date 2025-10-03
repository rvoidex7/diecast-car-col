import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

interface EmptyStateProps {
  title: string;
  description?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, description }) => {
  return (
    <View className="items-center justify-center py-12">
      <Ionicons name="car-outline" size={SIZES.xxLarge} color={COLORS.gray2} />
      <Text className="text-secondary font-semibold text-lg mt-4">{title}</Text>
      {description && <Text className="text-gray mt-2 text-center px-4">{description}</Text>}
    </View>
  );
};

export default EmptyState;

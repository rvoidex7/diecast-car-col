import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

const EmptyState = ({
  title,
  description,
  icon = 'clipboard-outline',
}: EmptyStateProps) => {
  return (
    <View className="items-center justify-center py-12 px-6 bg-lightWhite rounded-3xl">
      <Ionicons name={icon} size={40} color="#C1C0C8" />
      <Text className="text-secondary font-semibold text-lg mt-4">{title}</Text>
      <Text className="text-gray text-center mt-2">{description}</Text>
    </View>
  );
};

export default EmptyState;
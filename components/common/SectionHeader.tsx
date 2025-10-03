import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onActionPress?: () => void;
}

const SectionHeader = ({
  title,
  subtitle,
  actionLabel,
  onActionPress,
}: SectionHeaderProps) => {
  return (
    <View className="flex-row items-center justify-between mb-4">
      <View className="flex-1">
        <Text className="text-xl font-bold text-secondary">{title}</Text>
        {subtitle && <Text className="text-gray mt-1">{subtitle}</Text>}
      </View>
      {actionLabel && onActionPress && (
        <TouchableOpacity
          className="flex-row items-center bg-lightWhite px-4 py-2 rounded-full"
          onPress={onActionPress}
          activeOpacity={0.8}
        >
          <Text className="text-primary font-semibold">{actionLabel}</Text>
          <Ionicons name="chevron-forward-outline" size={16} color="#FF6347" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionHeader;
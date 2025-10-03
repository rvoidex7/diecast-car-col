import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onActionPress?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  actionLabel,
  onActionPress,
}) => {
  return (
    <View className="mb-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-xl font-bold text-secondary">{title}</Text>
        {actionLabel && onActionPress && (
          <TouchableOpacity onPress={onActionPress}>
            <Text className="text-primary font-semibold">{actionLabel}</Text>
          </TouchableOpacity>
        )}
      </View>
      {subtitle && <Text className="text-gray mt-1">{subtitle}</Text>}
    </View>
  );
};

export default SectionHeader;

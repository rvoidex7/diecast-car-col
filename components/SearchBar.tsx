import { Feather } from '@expo/vector-icons';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/theme';

type SearchBarProps = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPressFilter?: () => void;
};

export default function SearchBar({
  placeholder = 'Ara...',
  value,
  onChangeText,
  onPressFilter,
}: SearchBarProps) {
  return (
    <View className="my-2 flex-row items-center rounded-2xl bg-white px-4 py-3 shadow-sm">
      <Feather name="search" size={20} color={COLORS.gray} style={{ marginRight: 12 }} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray}
        value={value}
        onChangeText={onChangeText}
        className="flex-1 text-base text-secondary"
      />
      <TouchableOpacity
        onPress={onPressFilter}
        accessibilityRole="button"
        className="ml-3 rounded-full bg-lightWhite px-2 py-2"
      >
        <Feather name="sliders" size={16} color={COLORS.secondary} />
      </TouchableOpacity>
    </View>
  );
}

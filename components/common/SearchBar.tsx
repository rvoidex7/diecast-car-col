import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constants/theme';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onFilterPress?: () => void;
}

const SearchBar = ({
  placeholder = 'Model, seri veya satıcı ara...',
  onSearch,
  onFilterPress,
}: SearchBarProps) => {
  const [query, setQuery] = React.useState('');

  return (
    <View className="flex-row items-center bg-lightWhite rounded-lg shadow-sm my-4 p-2">
      <TouchableOpacity onPress={() => onSearch && onSearch(query)} className="p-2">
        <Ionicons name="search-outline" size={SIZES.large} color={COLORS.gray} />
      </TouchableOpacity>
      <TextInput
        className="flex-1 h-10 text-secondary text-base"
        placeholder={placeholder}
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={() => onSearch && onSearch(query)}
        placeholderTextColor={COLORS.gray}
      />
      {onFilterPress && (
        <TouchableOpacity onPress={onFilterPress} className="p-2">
          <Ionicons name="options-outline" size={SIZES.large} color={COLORS.secondary} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
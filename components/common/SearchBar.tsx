import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onFilterPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({
  placeholder = 'Model, seri veya satıcı ara...',
  onSearch,
  onFilterPress,
  value,
  onChangeText,
}: SearchBarProps) => {
  const [internalValue, setInternalValue] = React.useState(value ?? '');

  React.useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const handleChangeText = (text: string) => {
    if (value === undefined) {
      setInternalValue(text);
    }
    onChangeText?.(text);
  };

  const query = value !== undefined ? value : internalValue;

  return (
    <View className="flex-row items-center justify-between bg-lightWhite px-4 py-3 rounded-2xl shadow-sm my-4">
      <TextInput
        className="flex-1 h-10 text-secondary text-base"
        placeholder={placeholder}
        value={query}
        onChangeText={handleChangeText}
        onSubmitEditing={() => onSearch && onSearch(query)}
        placeholderTextColor={COLORS.gray}
      />
      {query.length > 0 && (
        <TouchableOpacity
          onPress={() => {
            handleChangeText('');
            onSearch?.('');
          }}
          className="p-2"
          accessibilityLabel="Arama metnini temizle"
        >
          <Ionicons name="close-circle" size={SIZES.large} color={COLORS.gray2} />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => onSearch && onSearch(query)} className="p-2">
        <Ionicons name="search-outline" size={SIZES.large} color={COLORS.secondary} />
      </TouchableOpacity>
      {onFilterPress && (
        <TouchableOpacity onPress={onFilterPress} className="p-2 ml-2">
          <Ionicons name="options-outline" size={SIZES.large} color={COLORS.secondary} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
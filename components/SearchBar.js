import { View, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';

const SearchBar = ({ placeholder }) => {
  return (
    <View className="flex-row items-center bg-white rounded-xl shadow p-3 my-4">
      <Feather name="search" size={20} color={COLORS.gray} className="mr-2" />
      <TextInput
        placeholder={placeholder}
        className="flex-1 text-base text-secondary"
      />
      <TouchableOpacity>
        <Feather name="sliders" size={20} color={COLORS.secondary} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
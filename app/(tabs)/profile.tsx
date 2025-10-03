import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constants/theme';

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = React.useState('collection');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <StatusBar barStyle="dark-content" />
      <View className="flex-1 items-center p-4 pt-8">
        {/* Profil Başlığı */}
        <Image
          source={require('../../assets/images/profile.png')}
          className="w-28 h-28 rounded-full border-4 border-primary"
        />
        <Text className="text-secondary font-bold text-2xl mt-4">diecast_master</Text>
        <Text className="text-gray-700 mt-1 text-center max-w-xs">"Her model bir hikaye anlatır."</Text>

        {/* İstatistikler */}
        <View className="flex-row justify-around w-full my-6 bg-white p-4 rounded-lg shadow-sm">
          <View className="items-center">
            <Text className="text-secondary font-bold text-lg">154</Text>
            <Text className="text-gray-600">Koleksiyon</Text>
          </View>
          <View className="items-center">
            <Text className="text-secondary font-bold text-lg">12</Text>
            <Text className="text-gray-600">Satışta</Text>
          </View>
          <View className="items-center">
            <Text className="text-secondary font-bold text-lg">4.8/5</Text>
            <Text className="text-gray-600">Puan</Text>
          </View>
        </View>

        {/* Sekmeler */}
        <View className="flex-row w-full border-b border-gray-200">
          <TouchableOpacity
            className={`flex-1 items-center py-3 border-b-2 ${activeTab === 'collection' ? 'border-primary' : 'border-transparent'}`}
            onPress={() => setActiveTab('collection')}
          >
            <Ionicons name="car-sport" size={SIZES.large} color={activeTab === 'collection' ? COLORS.primary : COLORS.gray} />
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 items-center py-3 border-b-2 ${activeTab === 'listings' ? 'border-primary' : 'border-transparent'}`}
            onPress={() => setActiveTab('listings')}
          >
            <Ionicons name="pricetags" size={SIZES.large} color={activeTab === 'listings' ? COLORS.primary : COLORS.gray} />
          </TouchableOpacity>
        </View>

        {/* Sekme İçeriği (Boş) */}
        <View className="flex-1 justify-center items-center bg-white w-full rounded-b-lg">
          <Text className="text-gray-500 text-lg">
            {activeTab === 'collection' ? 'Koleksiyon ürünleri burada görünecek.' : 'Satıştaki ürünler burada görünecek.'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
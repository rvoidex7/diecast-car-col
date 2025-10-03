import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constants/theme';

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = React.useState('collection');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View className="flex-1 items-center p-4">
        {/* Profile Header */}
        <Image
          source={{ uri: 'https://i.ibb.co/tZ0b4m9/profile-pic.webp' }}
          className="w-24 h-24 rounded-full"
        />
        <Text className="text-secondary font-bold text-xl mt-4">diecast_master</Text>
        <Text className="text-gray mt-1">"Her model bir hikaye anlatır."</Text>

        {/* Stats */}
        <View className="flex-row justify-around w-full my-6">
          <View className="items-center">
            <Text className="text-secondary font-bold text-lg">154</Text>
            <Text className="text-gray">Koleksiyon</Text>
          </View>
          <View className="items-center">
            <Text className="text-secondary font-bold text-lg">12</Text>
            <Text className="text-gray">Satışta</Text>
          </View>
          <View className="items-center">
            <Text className="text-secondary font-bold text-lg">4.8/5</Text>
            <Text className="text-gray">Puan</Text>
          </View>
        </View>

        {/* Tabs */}
        <View className="flex-row w-full border-b border-gray2">
          <TouchableOpacity
            className={`flex-1 items-center p-3 border-b-2 ${activeTab === 'collection' ? 'border-primary' : 'border-transparent'}`}
            onPress={() => setActiveTab('collection')}
          >
            <Ionicons name="car-sport-outline" size={SIZES.large} color={activeTab === 'collection' ? COLORS.primary : COLORS.gray} />
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 items-center p-3 border-b-2 ${activeTab === 'listings' ? 'border-primary' : 'border-transparent'}`}
            onPress={() => setActiveTab('listings')}
          >
            <Ionicons name="pricetags-outline" size={SIZES.large} color={activeTab === 'listings' ? COLORS.primary : COLORS.gray} />
          </TouchableOpacity>
        </View>

        {/* Tab Content Placeholder */}
        <View className="flex-1 justify-center items-center">
          <Text className="text-gray text-lg">
            {activeTab === 'collection' ? 'Koleksiyon ürünleri burada görünecek.' : 'Satıştaki ürünler burada görünecek.'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
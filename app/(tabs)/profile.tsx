import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    StatusBar,
} from 'react-native';
import Badge from '../../components/common/Badge';
import ListingCard from '../../components/common/ListingCard';
import SectionHeader from '../../components/common/SectionHeader';
import { mockCollection } from '../../data/mockCollection';
import { mockListings } from '../../data/mockListings';

type ProfileTab = 'collection' | 'listings';

const ProfileScreen = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState<ProfileTab>('collection');
  const navigateToListing = React.useCallback((id: string) => {
    router.push(`/listing/${id}` as never);
  }, [router]);
  const navigateToCar = React.useCallback((id: string) => {
    router.push(`/car/${id}` as never);
  }, [router]);

  const listingsByUser = mockListings.filter((listing) => listing.sellerUsername === 'diecast_master');

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={{ paddingBottom: 48 }}>
        <View className="bg-secondary rounded-b-3xl px-6 pt-12 pb-10">
          <View className="items-center">
            <View className="relative">
              <Image
                source={require('../../assets/images/profile.png')}
                className="w-28 h-28 rounded-full border-4 border-white"
              />
              <View className="absolute bottom-1 right-1 bg-primary rounded-full p-1.5">
                <Ionicons name="shield-checkmark" size={16} color="#FFFFFF" />
              </View>
            </View>
            <Text className="text-white text-2xl font-bold mt-4">diecast_master</Text>
            <Text className="text-white/80 mt-1">"Her model bir hikâye anlatır."</Text>

            <View className="flex-row justify-between w-full mt-8">
              <View className="items-center flex-1">
                <Text className="text-white text-2xl font-semibold">154</Text>
                <Text className="text-white/70 text-xs">Koleksiyonda</Text>
              </View>
              <View className="items-center flex-1">
                <Text className="text-white text-2xl font-semibold">12</Text>
                <Text className="text-white/70 text-xs">Satışta</Text>
              </View>
              <View className="items-center flex-1">
                <Text className="text-white text-2xl font-semibold">4.8</Text>
                <Text className="text-white/70 text-xs">Topluluk puanı</Text>
              </View>
            </View>

            <View className="flex-row mt-6 gap-3">
              <Badge label="5 yıllık koleksiyoner" variant="outline" size="md" />
              <Badge label="Premium üye" variant="primary" size="md" />
            </View>
          </View>
        </View>

        <View className="px-5 mt-6">
          <View className="flex-row bg-lightWhite rounded-3xl p-2 mb-6">
            <TouchableOpacity
              className={`flex-1 flex-row items-center justify-center py-3 rounded-2xl ${
                activeTab === 'collection' ? 'bg-white shadow-sm' : ''
              }`}
              onPress={() => setActiveTab('collection')}
              activeOpacity={0.85}
            >
              <Ionicons
                name="car-sport-outline"
                size={18}
                color={activeTab === 'collection' ? '#FF6347' : '#83829A'}
              />
              <Text
                className={`ml-2 font-semibold ${
                  activeTab === 'collection' ? 'text-primary' : 'text-secondary'
                }`}
              >
                Koleksiyon
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 flex-row items-center justify-center py-3 rounded-2xl ${
                activeTab === 'listings' ? 'bg-white shadow-sm' : ''
              }`}
              onPress={() => setActiveTab('listings')}
              activeOpacity={0.85}
            >
              <Ionicons
                name="pricetags-outline"
                size={18}
                color={activeTab === 'listings' ? '#FF6347' : '#83829A'}
              />
              <Text
                className={`ml-2 font-semibold ${
                  activeTab === 'listings' ? 'text-primary' : 'text-secondary'
                }`}
              >
                Satış & Takas
              </Text>
            </TouchableOpacity>
          </View>

          {activeTab === 'collection' ? (
            <View>
              <SectionHeader title="Öne çıkan parçalar" />
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {mockCollection.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    className="mr-4 bg-white rounded-3xl p-4 shadow-sm border border-lightWhite/60"
                    onPress={() => navigateToCar(item.car.id)}
                  >
                    <Image
                      source={item.car.photo}
                      className="w-40 h-28 rounded-2xl"
                      resizeMode="cover"
                    />
                    <Text className="text-secondary font-semibold mt-3" numberOfLines={1}>
                      {item.car.name}
                    </Text>
                    <Text className="text-gray text-xs" numberOfLines={1}>
                      {item.car.series}
                    </Text>
                    <View className="flex-row gap-2 mt-2">
                      {item.isForSale && <Badge label="Satışta" variant="primary" size="sm" />}
                      {item.isForTrade && <Badge label="Takas" variant="success" size="sm" />}
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              <View className="mt-8 bg-lightWhite rounded-3xl p-5">
                <SectionHeader
                  title="Topluluk güven skoru"
                  subtitle="Gerçekleşen 120 ticaretten %96 olumlu geri bildirim"
                />
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <Ionicons name="medal-outline" size={32} color="#FF6347" />
                    <View className="ml-3">
                      <Text className="text-secondary font-semibold text-lg">4.8 / 5</Text>
                      <Text className="text-gray text-xs">Son 6 ay</Text>
                    </View>
                  </View>
                  <TouchableOpacity className="bg-white px-4 py-2 rounded-full border border-primary/30">
                    <Text className="text-primary font-semibold">Yorumları gör</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <View>
              <SectionHeader title="Aktif ilanlar" />
              {listingsByUser.length > 0 ? (
                listingsByUser.map((listing) => (
                  <ListingCard
                    key={listing.listingId}
                    listing={listing}
                    onPress={() => navigateToListing(listing.listingId)}
                  />
                ))
              ) : (
                <View className="bg-lightWhite rounded-3xl p-6 items-center">
                  <Ionicons name="clipboard-outline" size={36} color="#83829A" />
                  <Text className="text-secondary font-semibold mt-4">Henüz ilan yok</Text>
                  <Text className="text-gray text-center mt-2">
                    Koleksiyonundaki parçaları satış ya da takasa açarak toplulukla paylaşabilirsin.
                  </Text>
                </View>
              )}
            </View>
          )}

          <View className="mt-8 mb-2">
            <SectionHeader title="Koleksiyoner notları" />
            <View className="bg-white rounded-3xl p-5 shadow-sm border border-lightWhite/60">
              <Text className="text-secondary leading-6">
                "Diecast koleksiyonculuğu sadece bir hobi değil, dünya çapındaki koleksiyonerlerle tanışma fırsatı
                sunan benzersiz bir topluluk. Güvenli ticaret ve doğru eşleşmeler için profilimi düzenli olarak
                güncelliyorum."
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
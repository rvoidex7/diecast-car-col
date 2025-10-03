import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import {
    Alert,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Badge from '../../components/common/Badge';
import EmptyState from '../../components/common/EmptyState';
import ListingCard from '../../components/common/ListingCard';
import SectionHeader from '../../components/common/SectionHeader';
import { mockCars } from '../../data/mockCars';
import { mockCollection } from '../../data/mockCollection';
import { mockListings } from '../../data/mockListings';
import { mockWanted } from '../../data/mockWanted';

const CarDetailScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams<{ carId?: string }>();
  const carId = params.carId ?? '';
  const car = mockCars.find((item) => item.id === carId);
  const collectionItem = mockCollection.find((item) => item.car.id === carId);
  const wantedEntry = mockWanted.find((entry) => entry.car.id === carId);
  const listingsForCar = mockListings.filter((listing) => listing.car.id === carId);

  const navigateToListing = React.useCallback(
    (id: string) => {
      router.push(`/listing/${id}` as never);
    },
    [router]
  );

  const [isForSale, setIsForSale] = React.useState(collectionItem?.isForSale ?? false);
  const [isForTrade, setIsForTrade] = React.useState(collectionItem?.isForTrade ?? false);

  if (!car) {
    return (
      <SafeAreaView className="flex-1 bg-white items-center justify-center p-6">
        <Text className="text-secondary text-lg font-semibold">Aradığınız model bulunamadı.</Text>
        <TouchableOpacity className="mt-4" onPress={() => router.back()}>
          <Text className="text-primary font-semibold">Geri dön</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const handleToggle = (type: 'sale' | 'trade') => {
    if (type === 'sale') {
      setIsForSale((prev) => {
        const next = !prev;
        Alert.alert('Koleksiyon güncellendi', next ? 'Model satışa taşındı.' : 'Model satıştan çıkarıldı.');
        return next;
      });
      return;
    }

    setIsForTrade((prev) => {
      const next = !prev;
      Alert.alert('Koleksiyon güncellendi', next ? 'Model takasa açıldı.' : 'Model takastan çıkarıldı.');
      return next;
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={{ paddingBottom: 48 }} className="flex-1">
        <View className="relative p-5 pb-0">
          <Image source={{ uri: car.photoUrl }} className="w-full h-64 rounded-3xl" resizeMode="cover" />

          <View className="absolute top-10 left-8 flex-row gap-2">
            <Badge label={car.series} variant="secondary" size="md" />
            <Badge label={`Yıl ${car.year}`} variant="outline" size="md" />
          </View>

          <View className="absolute top-10 right-8 flex-row gap-3">
            <TouchableOpacity
              className="bg-white/90 rounded-full p-2"
              onPress={() => router.back()}
              accessibilityLabel="Geri dön"
            >
              <Ionicons name="arrow-back" size={20} color="#444262" />
            </TouchableOpacity>
            <TouchableOpacity className="bg-white/90 rounded-full p-2" accessibilityLabel="Paylaş">
              <Ionicons name="share-social-outline" size={20} color="#444262" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-5 mt-6">
          <Text className="text-secondary text-2xl font-bold">{car.name}</Text>
          <Text className="text-gray mt-2">
            {collectionItem?.notes ?? 'Bu model için henüz not eklenmemiş. Not ekleyerek koleksiyon hikâyeni zenginleştirebilirsin.'}
          </Text>

          <View className="flex-row items-center justify-between bg-lightWhite mt-6 px-4 py-3 rounded-2xl">
            <View>
              <Text className="text-secondary font-semibold">Satış Durumu</Text>
              <Text className="text-gray text-xs mt-1">Tek tuşla pazaryerine taşı.</Text>
            </View>
            <View className="flex-row gap-2">
              <TouchableOpacity
                className={`px-4 py-2 rounded-full border ${isForSale ? 'bg-primary border-primary' : 'border-transparent bg-white'}`}
                onPress={() => handleToggle('sale')}
                activeOpacity={0.85}
              >
                <Text className={`font-semibold ${isForSale ? 'text-white' : 'text-primary'}`}>
                  {isForSale ? 'Satışta' : 'Satışa çıkar'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className={`px-4 py-2 rounded-full border ${isForTrade ? 'bg-secondary border-secondary' : 'border-transparent bg-white'}`}
                onPress={() => handleToggle('trade')}
                activeOpacity={0.85}
              >
                <Text className={`font-semibold ${isForTrade ? 'text-white' : 'text-secondary'}`}>
                  {isForTrade ? 'Takasta' : 'Takasa aç'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-6 bg-white border border-lightWhite/80 rounded-3xl p-4 shadow-sm">
            <SectionHeader title="Model Bilgileri" />
            <View className="flex-row justify-between mb-3">
              <Text className="text-gray">Seri</Text>
              <Text className="text-secondary font-semibold">{car.series}</Text>
            </View>
            <View className="flex-row justify-between mb-3">
              <Text className="text-gray">Üretim Yılı</Text>
              <Text className="text-secondary font-semibold">{car.year}</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray">Envantere giriş</Text>
              <Text className="text-secondary font-semibold">
                {collectionItem?.acquiredAt ?? 'Belirtilmedi'}
              </Text>
            </View>
          </View>

          {wantedEntry && (
            <View className="mt-6 bg-primary/10 border border-primary/30 rounded-3xl p-4">
              <SectionHeader title="Arama Alarmı" subtitle="Bu modeli bekleyen koleksiyonerler var." />
              <Text className="text-secondary font-semibold text-lg mb-2">
                {wantedEntry.priority.toUpperCase()} öncelikli {wantedEntry.matches} eşleşme
              </Text>
              <Text className="text-gray mb-3">{wantedEntry.notes}</Text>
              <Text className="text-primary font-semibold">Bildirimler açık: {wantedEntry.alertActive ? 'Evet' : 'Hayır'}</Text>
            </View>
          )}

          <View className="mt-6">
            <SectionHeader
              title="Pazaryerindeki İlanlar"
              subtitle="Bu model için aktif ilanları inceleyin."
            />
            {listingsForCar.length > 0 ? (
              listingsForCar.map((listing) => (
                <ListingCard
                  key={listing.listingId}
                  listing={listing}
                  onPress={() => navigateToListing(listing.listingId)}
                />
              ))
            ) : (
              <EmptyState
                title="Henüz ilan yok"
                description="Bu modeli pazaryerine taşımak için hemen ilan oluşturun."
              />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CarDetailScreen;

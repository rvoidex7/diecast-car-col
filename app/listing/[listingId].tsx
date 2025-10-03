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
import { mockListings } from '../../data/mockListings';
import { mockWanted } from '../../data/mockWanted';

const ListingDetailScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams<{ listingId?: string }>();
  const listingId = params.listingId ?? '';
  const listing = mockListings.find((item) => item.listingId === listingId);

  const navigateToListing = React.useCallback(
    (id: string) => {
      router.push(`/listing/${id}` as never);
    },
    [router]
  );

  if (!listing) {
    return (
      <SafeAreaView className="flex-1 bg-white items-center justify-center p-6">
        <Text className="text-secondary text-lg font-semibold">İlan bulunamadı.</Text>
        <TouchableOpacity className="mt-4" onPress={() => router.back()}>
          <Text className="text-primary font-semibold">Geri dön</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const relatedListings = mockListings.filter(
    (item) => item.listingId !== listing.listingId && item.car.series === listing.car.series
  );

  const wantedMatches = mockWanted.filter((entry) => entry.car.id === listing.car.id);

  const handleAction = (message: string) => {
    Alert.alert('İşlem', message);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 56 }}>
        <View className="relative p-5 pb-0">
          <Image source={{ uri: listing.car.photoUrl }} className="w-full h-72 rounded-3xl" resizeMode="cover" />

          <View className="absolute top-10 left-8 flex-row gap-2">
            <Badge label={listing.type === 'sale' ? 'Satılık' : 'Takas'} variant="primary" size="md" />
            <Badge label={listing.condition} variant="outline" size="md" />
          </View>

          <View className="absolute top-10 right-8 flex-row gap-3">
            <TouchableOpacity
              className="bg-white/90 rounded-full p-2"
              onPress={() => router.back()}
              accessibilityLabel="Geri dön"
            >
              <Ionicons name="close" size={20} color="#444262" />
            </TouchableOpacity>
            <TouchableOpacity className="bg-white/90 rounded-full p-2" accessibilityLabel="Favorilere ekle">
              <Ionicons name="heart-outline" size={20} color="#FF6347" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-5 mt-6">
          <Text className="text-secondary text-2xl font-bold" numberOfLines={2}>
            {listing.car.name}
          </Text>
          <Text className="text-gray mt-2">{listing.car.series} · {listing.car.year}</Text>

          <View className="flex-row items-center justify-between mt-4">
            <Text className="text-primary text-3xl font-extrabold">
              {listing.type === 'sale' ? `${listing.price} TL` : 'Takas Teklifine Açık'}
            </Text>
            <View className="items-end">
              {listing.postedAt && <Text className="text-gray text-xs">{listing.postedAt}</Text>}
              {listing.watchers !== undefined && (
                <Text className="text-gray text-xs mt-1">{listing.watchers}+ koleksiyoner inceledi</Text>
              )}
            </View>
          </View>

          <View className="flex-row flex-wrap gap-2 mt-4">
            {listing.tags?.map((tag) => (
              <Badge key={tag} label={`#${tag}`} size="sm" variant="outline" />
            ))}
          </View>

          <View className="bg-lightWhite rounded-3xl p-4 mt-6">
            <SectionHeader title="Satıcı" subtitle="Güven skoru yüksek koleksiyoner." />
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Ionicons name="person-circle-outline" size={36} color="#444262" />
                <View className="ml-3">
                  <Text className="text-secondary font-semibold text-base">{listing.sellerUsername}</Text>
                  <Text className="text-gray text-xs">{listing.location ?? 'Türkiye'} • 120 olumlu ticaret</Text>
                </View>
              </View>
              <TouchableOpacity
                className="bg-white px-3 py-2 rounded-full border border-primary/40"
                onPress={() => handleAction('Satıcıya mesaj gönderildi.')}>
                <Text className="text-primary font-semibold">Mesaj Gönder</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-6">
            <SectionHeader title="Açıklama" />
            <Text className="text-secondary leading-6">
              {listing.description}
            </Text>
          </View>

          {wantedMatches.length > 0 && (
            <View className="mt-6 bg-primary/10 border border-primary/30 rounded-3xl p-4">
              <SectionHeader
                title="Anlık eşleşme bildirimi"
                subtitle="Bu modeli bekleyen koleksiyonerler var."
              />
              {wantedMatches.map((match) => (
                <View key={match.id} className="flex-row items-center justify-between mt-2">
                  <View>
                    <Text className="text-secondary font-semibold">{match.priority.toUpperCase()} öncelik</Text>
                    <Text className="text-gray text-xs">{match.notes}</Text>
                  </View>
                  <Badge label={`${match.matches} eşleşme`} variant="primary" size="sm" />
                </View>
              ))}
            </View>
          )}

          <View className="flex-row items-center justify-between mt-8">
            <TouchableOpacity
              className="flex-1 flex-row items-center justify-center bg-primary py-4 rounded-2xl mr-3"
              onPress={() => handleAction('Satıcıya fiyat teklifi iletildi.')}
            >
              <Ionicons name="chatbubble-ellipses-outline" size={20} color="#FFFFFF" />
              <Text className="text-white font-semibold text-base ml-2">Fiyat Teklif Et</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-1 flex-row items-center justify-center bg-secondary py-4 rounded-2xl"
              onPress={() => handleAction('Takas isteği gönderildi.')}
            >
              <Ionicons name="swap-horizontal-outline" size={20} color="#FFFFFF" />
              <Text className="text-white font-semibold text-base ml-2">Takas İste</Text>
            </TouchableOpacity>
          </View>

          <View className="mt-10">
            <SectionHeader title="Benzer İlanlar" />
            {relatedListings.length > 0 ? (
              relatedListings.map((item) => (
                <ListingCard
                  key={item.listingId}
                  listing={item}
                  onPress={() => navigateToListing(item.listingId)}
                />
              ))
            ) : (
              <EmptyState
                title="Benzer ilan yok"
                description="Bu seri için ilk sen vitrin oluştur." />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListingDetailScreen;

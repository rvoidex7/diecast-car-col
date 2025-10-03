import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Alert,
    FlatList,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    StatusBar,
} from 'react-native';
import EmptyState from '../../components/common/EmptyState';
import ListingCard from '../../components/common/ListingCard';
import SearchBar from '../../components/common/SearchBar';
import SectionHeader from '../../components/common/SectionHeader';
import { mockListings } from '../../data/mockListings';

const quickFilters = [
  { id: 'all', label: 'Tümü', icon: 'layers-outline' },
  { id: 'sale', label: 'Satılık', icon: 'cash-outline' },
  { id: 'trade', label: 'Takas', icon: 'swap-horizontal-outline' },
  { id: 'featured', label: 'Öne Çıkan', icon: 'color-wand-outline' },
  { id: 'recent', label: 'Yeni', icon: 'time-outline' },
];

const MarketplaceScreen = () => {
  const router = useRouter();
  const [query, setQuery] = React.useState('');
  const [activeFilter, setActiveFilter] = React.useState<string>('all');

  const stats = React.useMemo(() => {
    const total = mockListings.length;
    const sale = mockListings.filter((item) => item.type === 'sale').length;
    const trade = mockListings.filter((item) => item.type === 'trade').length;
    const featured = mockListings.filter((item) => item.isFeatured).length;
    return { total, sale, trade, featured };
  }, []);

  const filteredListings = React.useMemo(() => {
    return mockListings.filter((listing) => {
      const matchesQuery = [
        listing.car.name,
        listing.car.series,
        listing.sellerUsername,
      ]
        .join(' ')
        .toLowerCase()
        .includes(query.toLowerCase());

      if (!matchesQuery) return false;

      if (activeFilter === 'sale') return listing.type === 'sale';
      if (activeFilter === 'trade') return listing.type === 'trade';
      if (activeFilter === 'featured') return listing.isFeatured;
      if (activeFilter === 'recent') return listing.postedAt === '2 saat önce' || listing.postedAt === '12 saat önce';
      return true;
    });
  }, [query, activeFilter]);

  const navigateToListing = React.useCallback(
    (id: string) => {
      router.push(`/listing/${id}` as never);
    },
    [router]
  );

  const handleFilterAction = () => {
    Alert.alert('Filtreler', 'Gelişmiş filtreler yakında eklenecek.');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={filteredListings}
        keyExtractor={(item) => item.listingId}
        renderItem={({ item }) => (
          <ListingCard listing={item} onPress={() => navigateToListing(item.listingId)} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 48 }}
        ListHeaderComponent={(
          <View>
            <ImageBackground
              source={require('../../assets/images/marketplace-bg.png')}
              className="w-full rounded-3xl overflow-hidden mb-6"
            >
              <View className="bg-black/50 p-6">
                <Text className="text-white text-sm uppercase tracking-widest">Koleksiyoner Pazaryeri</Text>
                <Text className="text-white text-3xl font-extrabold mt-2">Hayalindeki model sana gelsin</Text>
                <Text className="text-white/80 mt-3">
                  Aradığın parçayı dakikalar içinde bul, satış ve takas ilanlarını zahmetsizce yönet.
                </Text>
                <View className="flex-row mt-6">
                  <View className="bg-white/15 rounded-2xl px-4 py-3 mr-3">
                    <Text className="text-white text-2xl font-bold">{stats.total}</Text>
                    <Text className="text-white/70 text-xs">Aktif ilan</Text>
                  </View>
                  <View className="bg-white/15 rounded-2xl px-4 py-3">
                    <Text className="text-white text-2xl font-bold">{stats.featured}</Text>
                    <Text className="text-white/70 text-xs">Öne çıkan</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>

            <SearchBar
              value={query}
              onChangeText={setQuery}
              onSearch={setQuery}
              onFilterPress={handleFilterAction}
              placeholder="Model, seri veya satıcı ara..."
            />

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="-mx-1 mb-6"
              contentContainerStyle={{ paddingHorizontal: 2 }}
            >
              {quickFilters.map((filter) => {
                const isActive = activeFilter === filter.id;
                return (
                  <TouchableOpacity
                    key={filter.id}
                    className={`px-4 py-2 mr-3 rounded-full flex-row items-center border ${
                      isActive ? 'bg-primary border-primary' : 'bg-lightWhite border-transparent'
                    }`}
                    onPress={() => setActiveFilter(filter.id)}
                    activeOpacity={0.85}
                  >
                    <Ionicons
                      name={filter.icon as any}
                      size={16}
                      color={isActive ? '#FFFFFF' : '#444262'}
                    />
                    <Text className={`ml-2 font-semibold ${isActive ? 'text-white' : 'text-secondary'}`}>
                      {filter.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            <SectionHeader
              title="Yeni Eklenenler"
              subtitle="Topluluktaki en güncel satış ve takas fırsatları"
              actionLabel="Tümü"
              onActionPress={() => setActiveFilter('all')}
            />
          </View>
        )}
        ListEmptyComponent={
          <EmptyState
            title="İlan bulunamadı"
            description="Filtreleri temizleyerek aramanı genişletmeyi deneyebilirsin."
          />
        }
      />
    </SafeAreaView>
  );
};

export default MarketplaceScreen;
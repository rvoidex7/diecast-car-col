import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Alert,
    FlatList,
    GestureResponderEvent,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Badge from '../../components/common/Badge';
import EmptyState from '../../components/common/EmptyState';
import SearchBar from '../../components/common/SearchBar';
import SectionHeader from '../../components/common/SectionHeader';
import { mockCollection } from '../../data/mockCollection';
import { CollectionItem } from '../../types';

const filters = [
  { id: 'all', label: 'Tümü' },
  { id: 'sale', label: 'Satışta' },
  { id: 'trade', label: 'Takas Açık' },
  { id: 'favorites', label: 'Favoriler' },
];

const MyCollectionScreen = () => {
  const router = useRouter();
  const navigateToCar = React.useCallback((id: string) => {
    router.push(`/car/${id}` as never);
  }, [router]);
  const [query, setQuery] = React.useState('');
  const [activeFilter, setActiveFilter] = React.useState<string>('all');
  const [collection, setCollection] = React.useState<CollectionItem[]>(mockCollection);

  const totals = React.useMemo(() => {
    const total = collection.length;
    const sale = collection.filter((item) => item.isForSale).length;
    const trade = collection.filter((item) => item.isForTrade).length;
    const favorites = collection.filter((item) => item.favorite).length;
    return { total, sale, trade, favorites };
  }, [collection]);

  const filteredCollection = React.useMemo(() => {
    return collection.filter((item) => {
      const matchesQuery = item.car.name.toLowerCase().includes(query.toLowerCase()) ||
        item.car.series.toLowerCase().includes(query.toLowerCase());

      if (!matchesQuery) return false;

      if (activeFilter === 'sale') return item.isForSale;
      if (activeFilter === 'trade') return item.isForTrade;
      if (activeFilter === 'favorites') return item.favorite;
      return true;
    });
  }, [collection, query, activeFilter]);

  const toggleSale = (id: string) => {
    setCollection((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, isForSale: !item.isForSale }
          : item
      )
    );
    Alert.alert('Güncellendi', 'Aracın satış durumu güncellendi.');
  };

  const toggleTrade = (id: string) => {
    setCollection((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, isForTrade: !item.isForTrade }
          : item
      )
    );
    Alert.alert('Güncellendi', 'Aracın takas durumu güncellendi.');
  };

  const toggleFavorite = (id: string) => {
    setCollection((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  const renderCollectionCard = ({ item }: { item: CollectionItem }) => {
    return (
      <TouchableOpacity
        className="bg-white rounded-3xl p-4 shadow-sm mb-5 border border-lightWhite/60"
        onPress={() => navigateToCar(item.car.id)}
        activeOpacity={0.88}
      >
        <View className="relative">
          <Image
            source={{ uri: item.car.photoUrl }}
            className="w-full h-36 rounded-2xl"
            resizeMode="cover"
          />
          <TouchableOpacity
            className="absolute top-3 right-3 bg-white/80 rounded-full p-2"
            onPress={(event: GestureResponderEvent) => {
              event.stopPropagation();
              toggleFavorite(item.id);
            }}
            activeOpacity={0.7}
            accessibilityLabel="Favorilere ekle"
          >
            <Ionicons
              name={item.favorite ? 'star' : 'star-outline'}
              size={20}
              color={item.favorite ? '#F7B500' : '#A5A6B8'}
            />
          </TouchableOpacity>
        </View>

        <View className="mt-4">
          <View className="flex-row items-center justify-between">
            <View className="flex-1 pr-2">
              <Text className="text-secondary font-bold text-lg" numberOfLines={1}>
                {item.car.name}
              </Text>
              <Text className="text-gray text-sm" numberOfLines={1}>
                {item.car.series} · {item.car.year}
              </Text>
            </View>
            <Badge label={item.condition} variant="outline" size="sm" />
          </View>

          <View className="flex-row flex-wrap gap-2 mt-3">
            <Badge label={`Edinim: ${item.acquiredAt}`} size="sm" variant="secondary" />
            {item.purchasePrice && (
              <Badge label={`Alış: ${item.purchasePrice} TL`} size="sm" variant="outline" />
            )}
            {item.isForSale && <Badge label="Satışta" size="sm" variant="primary" />}
            {item.isForTrade && <Badge label="Takas" size="sm" variant="success" />}
          </View>

          {item.notes && <Text className="text-gray mt-3">{item.notes}</Text>}
        </View>

        <View className="flex-row items-center justify-between mt-5">
          <TouchableOpacity
            className={`flex-1 flex-row items-center justify-center py-3 rounded-2xl mr-3 ${
              item.isForSale ? 'bg-primary' : 'bg-lightWhite'
            }`}
            onPress={(event: GestureResponderEvent) => {
              event.stopPropagation();
              toggleSale(item.id);
            }}
            activeOpacity={0.8}
          >
            <Ionicons
              name="cash-outline"
              size={18}
              color={item.isForSale ? '#FFFFFF' : '#FF6347'}
            />
            <Text
              className={`font-semibold ml-2 ${item.isForSale ? 'text-white' : 'text-primary'}`}
            >
              {item.isForSale ? 'Satıştan Kaldır' : 'Satışa Çıkar'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`flex-1 flex-row items-center justify-center py-3 rounded-2xl ${
              item.isForTrade ? 'bg-secondary' : 'bg-lightWhite'
            }`}
            onPress={(event: GestureResponderEvent) => {
              event.stopPropagation();
              toggleTrade(item.id);
            }}
            activeOpacity={0.8}
          >
            <Ionicons
              name="swap-horizontal-outline"
              size={18}
              color={item.isForTrade ? '#FFFFFF' : '#444262'}
            />
            <Text
              className={`font-semibold ml-2 ${item.isForTrade ? 'text-white' : 'text-secondary'}`}
            >
              {item.isForTrade ? 'Takas Kaldır' : 'Takasa Aç'}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={filteredCollection}
        keyExtractor={(item) => item.id}
        renderItem={renderCollectionCard}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 48 }}
        ListHeaderComponent={(
          <View>
            <View className="bg-secondary rounded-3xl p-6 mb-6">
              <View className="flex-row items-center justify-between">
                <View className="flex-1 pr-4">
                  <Text className="text-white text-2xl font-bold">Koleksiyon Vitrini</Text>
                  <Text className="text-white/80 mt-2">
                    Koleksiyonunu yönet, satış ve takas için uygun parçalarını dakikalar içinde vitrine çıkar.
                  </Text>
                </View>
                <View className="bg-white/10 rounded-2xl px-4 py-3 items-center">
                  <Text className="text-white text-3xl font-extrabold">{totals.total}</Text>
                  <Text className="text-white/70 text-xs">Toplam model</Text>
                </View>
              </View>

              <View className="flex-row justify-between mt-6">
                <View className="items-center flex-1">
                  <Text className="text-white text-lg font-semibold">{totals.sale}</Text>
                  <Text className="text-white/70 text-xs">Satışta</Text>
                </View>
                <View className="h-8 w-px bg-white/20" />
                <View className="items-center flex-1">
                  <Text className="text-white text-lg font-semibold">{totals.trade}</Text>
                  <Text className="text-white/70 text-xs">Takasa açık</Text>
                </View>
                <View className="h-8 w-px bg-white/20" />
                <View className="items-center flex-1">
                  <Text className="text-white text-lg font-semibold">{totals.favorites}</Text>
                  <Text className="text-white/70 text-xs">Favoriler</Text>
                </View>
              </View>
            </View>

            <SearchBar
              value={query}
              onChangeText={setQuery}
              onSearch={setQuery}
              placeholder="Koleksiyonda ara..."
            />

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="-mx-1 mb-6"
              contentContainerStyle={{ paddingHorizontal: 2 }}
            >
              {filters.map((filter) => {
                const isActive = activeFilter === filter.id;
                return (
                  <TouchableOpacity
                    key={filter.id}
                    className={`px-4 py-2 rounded-full mr-3 border ${
                      isActive ? 'bg-primary border-primary' : 'border-lightWhite bg-white'
                    }`}
                    onPress={() => setActiveFilter(filter.id)}
                    activeOpacity={0.8}
                  >
                    <Text className={`font-semibold ${isActive ? 'text-white' : 'text-secondary'}`}>
                      {filter.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            <SectionHeader
              title="Koleksiyon Parçaları"
              subtitle="Her aracın hikâyesini not düş, vitrinini düzenle."
            />
          </View>
        )}
        ListEmptyComponent={
          <EmptyState
            title="Henüz model eklenmedi"
            description="Koleksiyonuna yeni model arabalar ekleyerek vitrini doldurmaya başla."
          />
        }
      />
    </SafeAreaView>
  );
};

export default MyCollectionScreen;
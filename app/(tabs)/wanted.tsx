import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    FlatList,
    Image,
    Modal,
    SafeAreaView,
    ScrollView,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Badge from '../../components/common/Badge';
import EmptyState from '../../components/common/EmptyState';
import SectionHeader from '../../components/common/SectionHeader';
import { mockCars } from '../../data/mockCars';
import { mockListings } from '../../data/mockListings';
import { mockWanted } from '../../data/mockWanted';
import { WantedEntry } from '../../types';

const priorities: WantedEntry['priority'][] = ['düşük', 'orta', 'yüksek'];

const WantedScreen = () => {
  const router = useRouter();
  const [wanted, setWanted] = React.useState<WantedEntry[]>(mockWanted);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedCarId, setSelectedCarId] = React.useState<string | null>(null);
  const [note, setNote] = React.useState('');
  const [priority, setPriority] = React.useState<WantedEntry['priority']>('orta');

  const navigateToCar = React.useCallback((id: string) => {
    router.push(`/car/${id}` as never);
  }, [router]);

  const navigateToListing = React.useCallback((id: string) => {
    router.push(`/listing/${id}` as never);
  }, [router]);

  const handleToggleAlert = (id: string) => {
    setWanted((prev) =>
      prev.map((entry) =>
        entry.id === id ? { ...entry, alertActive: !entry.alertActive } : entry
      )
    );
  };

  const handleAddWanted = () => {
    if (!selectedCarId) return;
    const car = mockCars.find((c) => c.id === selectedCarId);
    if (!car) return;

    const newEntry: WantedEntry = {
      id: `w-${Date.now()}`,
      car,
      priority,
      alertActive: true,
      addedAt: new Date().toISOString().split('T')[0],
      notes: note || 'Not eklenmedi',
      matches: mockListings.filter((listing) => listing.car.id === selectedCarId).length,
    };

    setWanted((prev) => [newEntry, ...prev]);
    setModalVisible(false);
    setSelectedCarId(null);
    setNote('');
    setPriority('orta');
  };

  const renderWantedItem = ({ item }: { item: WantedEntry }) => {
    const matchingListings = mockListings.filter((listing) => listing.car.id === item.car.id);

    return (
      <View className="bg-white rounded-3xl p-4 shadow-sm mb-5 border border-lightWhite/60">
        <TouchableOpacity
          className="flex-row items-center"
          onPress={() => navigateToCar(item.car.id)}
          activeOpacity={0.85}
        >
          <Image source={{ uri: item.car.photoUrl }} className="w-16 h-16 rounded-2xl" resizeMode="cover" />
          <View className="ml-4 flex-1">
            <Text className="text-secondary font-bold text-base" numberOfLines={1}>
              {item.car.name}
            </Text>
            <Text className="text-gray text-xs" numberOfLines={1}>
              {item.car.series} · {item.car.year}
            </Text>
            <View className="flex-row gap-2 mt-2">
              <Badge label={`Öncelik: ${item.priority}`} variant="primary" size="sm" />
              <Badge label={`${item.matches} eşleşme`} variant="outline" size="sm" />
            </View>
          </View>
          <View className="items-center">
            <Text className="text-gray text-xs">Bildirim</Text>
            <Switch
              value={item.alertActive}
              onValueChange={() => handleToggleAlert(item.id)}
              thumbColor={item.alertActive ? '#FF6347' : '#f4f3f4'}
              trackColor={{ false: '#d1d1d6', true: '#ffd6cc' }}
            />
          </View>
        </TouchableOpacity>

        <Text className="text-gray mt-3">{item.notes}</Text>
        <Text className="text-gray text-xs mt-2">Listeye eklenme: {item.addedAt}</Text>

        {matchingListings.length > 0 && (
          <View className="mt-4">
            <SectionHeader title="Anlık uyum sağlayan ilanlar" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {matchingListings.map((listing) => (
                <TouchableOpacity
                  key={listing.listingId}
                  className="mr-4"
                  onPress={() => navigateToListing(listing.listingId)}
                >
                  <Image
                    source={{ uri: listing.car.photoUrl }}
                    className="w-36 h-24 rounded-2xl"
                    resizeMode="cover"
                  />
                  <Text className="text-secondary text-sm font-semibold mt-2" numberOfLines={1}>
                    {listing.car.name}
                  </Text>
                  <Text className="text-primary text-sm font-bold">
                    {listing.type === 'sale' ? `${listing.price} TL` : 'Takas'}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={wanted}
        keyExtractor={(item) => item.id}
        renderItem={renderWantedItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 64 }}
        ListHeaderComponent={(
          <View>
            <View className="bg-primary rounded-3xl p-6 mb-6">
              <Text className="text-white text-2xl font-bold">Aranan Modeller</Text>
              <Text className="text-white/80 mt-2">
                Bir koleksiyoner pazaryerine bu modelleri eklediğinde ilk sen haberdar ol.
              </Text>
              <TouchableOpacity
                className="bg-white rounded-2xl px-4 py-3 flex-row items-center justify-center mt-5"
                onPress={() => setModalVisible(true)}
              >
                <Ionicons name="add" size={20} color="#FF6347" />
                <Text className="text-primary font-semibold ml-2">Yeni Aranan Model Ekle</Text>
              </TouchableOpacity>
            </View>

            <SectionHeader
              title="Aktif Alarmlar"
              subtitle="Toplulukla eşleşmeyi hızlandırmak için bildirimleri açık tut."
            />
          </View>
        )}
        ListEmptyComponent={
          <EmptyState
            title="Henüz aranan model yok"
            description="Aradığın modelin peşine düş ve pazaryeri eklendiğinde anında haberdar ol."
          />
        }
      />

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View className="flex-1 bg-black/40 justify-end">
          <View className="bg-white rounded-t-3xl p-6 max-h-[80%]">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-secondary text-lg font-semibold">Yeni Aranan Model</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Ionicons name="close" size={22} color="#444262" />
              </TouchableOpacity>
            </View>

            <Text className="text-gray mb-2">Model seç</Text>
            <ScrollView className="max-h-48 mb-4">
              {mockCars.map((car) => {
                const isSelected = selectedCarId === car.id;
                return (
                  <TouchableOpacity
                    key={car.id}
                    className={`flex-row items-center p-3 mb-2 rounded-2xl border ${
                      isSelected ? 'bg-primary/10 border-primary' : 'bg-lightWhite border-transparent'
                    }`}
                    onPress={() => setSelectedCarId(car.id)}
                  >
                    <Image source={{ uri: car.photoUrl }} className="w-12 h-12 rounded-xl" />
                    <View className="ml-3 flex-1">
                      <Text className="text-secondary font-semibold" numberOfLines={1}>
                        {car.name}
                      </Text>
                      <Text className="text-gray text-xs">{car.series}</Text>
                    </View>
                    {isSelected && <Ionicons name="checkmark-circle" size={20} color="#FF6347" />}
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            <Text className="text-gray mb-2">Öncelik</Text>
            <View className="flex-row mb-4">
              {priorities.map((value) => {
                const isActive = priority === value;
                return (
                  <TouchableOpacity
                    key={value}
                    className={`px-4 py-2 mr-3 rounded-full border ${
                      isActive ? 'bg-primary border-primary' : 'bg-lightWhite border-transparent'
                    }`}
                    onPress={() => setPriority(value)}
                  >
                    <Text className={`font-semibold ${isActive ? 'text-white' : 'text-secondary'}`}>{value}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <Text className="text-gray mb-2">Not</Text>
            <TextInput
              className="bg-lightWhite rounded-2xl p-3 text-secondary mb-4"
              placeholder="Spesifik beklentilerini yaz"
              placeholderTextColor="#83829A"
              value={note}
              onChangeText={setNote}
              multiline
            />

            <TouchableOpacity
              className={`w-full py-4 rounded-2xl ${selectedCarId ? 'bg-primary' : 'bg-gray2'}`}
              disabled={!selectedCarId}
              onPress={handleAddWanted}
            >
              <Text className="text-center text-white font-semibold">Arananlar listesine ekle</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default WantedScreen;
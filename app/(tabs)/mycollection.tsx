import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

const myMockCollection = [
  { id: 'c1', name: 'Pagani Zonda R', imageUrl: 'https://via.placeholder.com/150/FF6347/FFFFFF?text=Zonda' },
  { id: 'c2', name: 'Volkswagen Beetle', imageUrl: 'https://via.placeholder.com/150/444262/FFFFFF?text=Beetle' },
  { id: 'c3', name: 'Ford Mustang GT', imageUrl: 'https://via.placeholder.com/150/FF7754/FFFFFF?text=Mustang' },
  { id: 'c4', name: 'Lamborghini Sesto Elemento', imageUrl: 'https://via.placeholder.com/150/83829A/FFFFFF?text=Sesto' },
  { id: 'c5', name: 'McLaren F1', imageUrl: 'https://via.placeholder.com/150/C1C0C8/000000?text=McLaren' },
  { id: 'c6', name: 'Audi RS 6 Avant', imageUrl: 'https://via.placeholder.com/150/000000/FFFFFF?text=Audi' },
];

const MyCollectionScreen = () => {
  type CollectionItem = (typeof myMockCollection)[number];

  const renderItem = ({ item }: { item: CollectionItem }) => (
    <TouchableOpacity className="m-2 flex-1 items-center rounded-2xl bg-white p-3 shadow-sm">
      <Image
        source={{ uri: item.imageUrl }}
        className="w-full h-24 rounded-md"
        resizeMode="cover"
      />
      <Text className="mt-2 text-center text-sm font-semibold text-secondary">{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-lightWhite">
      <View className="p-4">
        <Text className="text-2xl font-bold text-secondary mb-4">Koleksiyonum</Text>
        <FlatList
          data={myMockCollection}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyCollectionScreen;
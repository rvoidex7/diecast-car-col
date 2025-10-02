import { Image, Text, View } from 'react-native';

type Listing = {
  id: string;
  name: string;
  series: string;
  price: string;
  seller: string;
  imageUrl: string;
};

type ListingCardProps = {
  listing: Listing;
};

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <View className="mb-4 overflow-hidden rounded-2xl bg-white shadow-lg">
      <Image
        source={{ uri: listing.imageUrl }}
        className="h-36 w-full"
        resizeMode="cover"
      />

      <View className="gap-1 p-4">
        <Text className="text-lg font-semibold text-black">{listing.name}</Text>
        <Text className="text-sm text-gray">Seri: {listing.series}</Text>
        <Text className="text-base font-medium text-primary">{listing.price}</Text>
        <Text className="text-sm text-gray2">Satıcı: {listing.seller}</Text>
      </View>
    </View>
  );
}

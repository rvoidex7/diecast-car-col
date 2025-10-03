export interface Car {
  id: string;
  name: string;
  series: string;
  year: string;
  photoUrl: string;
}

export interface Listing {
  listingId: string;
  sellerUsername: string;
  car: Car;
  type: 'sale' | 'trade';
  price: number | string;
  condition: 'Sıfır' | 'Kutulu' | 'İkinci El';
  description: string;
}
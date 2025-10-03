export interface Car {
  id: string;
  name: string;
  series: string;
  year: string;
  photo: any; // Using 'any' for require() return type
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
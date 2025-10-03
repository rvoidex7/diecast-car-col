export interface Car {
  id: string;
  name: string;
  series: string;
  year: string;
  photo: any; // Yerel resimler için require() dönüş tipi
}

export interface Listing {
  listingId: string;
  sellerUsername: string;
  car: Car;
  type: 'sale' | 'trade';
  price: number | string;
  condition: 'Sıfır' | 'Kutulu' | 'İkinci El';
  description: string;
  postedAt?: string;
  location?: string;
  watchers?: number;
  isFeatured?: boolean;
  tags?: string[];
}

export interface CollectionItem {
  id: string;
  car: Car;
  addedAt: string;
  condition: 'Sıfır' | 'Kutulu' | 'İkinci El';
  isForSale: boolean;
  isForTrade: boolean;
  favorite: boolean;
  purchasePrice?: number;
  notes?: string;
}

export interface WantedEntry {
  id: string;
  car: Car;
  priority: 'düşük' | 'orta' | 'yüksek';
  alertActive: boolean;
  addedAt: string;
  notes?: string;
  matches: number;
}
import { CollectionItem } from '../types';
import { mockCars } from './mockCars';

export const mockCollection: CollectionItem[] = [
  {
    id: 'c1',
    car: mockCars[0],
    addedAt: '2023-10-15',
    condition: 'Kutulu',
    isForSale: true,
    isForTrade: false,
    favorite: true,
    purchasePrice: 120,
    notes: 'Kutusu hafif yıpranmış.',
  },
  {
    id: 'c2',
    car: mockCars[1],
    addedAt: '2022-05-20',
    condition: 'İkinci El',
    isForSale: false,
    isForTrade: true,
    favorite: true,
    notes: 'Brian O\'Conner efsanesi.',
  },
  {
    id: 'c3',
    car: mockCars[2],
    addedAt: '2024-01-01',
    condition: 'Sıfır',
    isForSale: true,
    isForTrade: true,
    favorite: false,
    purchasePrice: 200,
  },
  {
    id: 'c4',
    car: mockCars[3],
    addedAt: '2021-11-30',
    condition: 'Kutulu',
    isForSale: false,
    isForTrade: false,
    favorite: false,
  },
];
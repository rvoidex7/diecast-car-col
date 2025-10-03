import { Listing } from '../types';
import { mockCars } from './mockCars';

export const mockListings: Listing[] = [
  {
    listingId: 'l1',
    sellerUsername: 'koleksiyoner123',
    car: mockCars[0], // Porsche 911 GT3 RS
    type: 'sale',
    price: 150,
    condition: 'Kutulu',
    description: 'Nadir bulunan HW Exotics serisinden. Kutusu ilk günkü gibi.',
  },
  {
    listingId: 'l2',
    sellerUsername: 'garaj_ustasi',
    car: mockCars[1], // Nissan Skyline GT-R (R34)
    type: 'trade',
    price: 'Takasa Özel',
    condition: 'İkinci El',
    description: 'Fast & Furious serisinden ikonik model. Sadece Japon arabalarıyla takas olur.',
  },
  {
    listingId: 'l3',
    sellerUsername: 'diecast_dunyasi',
    car: mockCars[2], // Lamborghini Countach
    type: 'sale',
    price: 250,
    condition: 'Sıfır',
    description: 'Retro Racers 2024 serisi. Kartonet hatasız.',
  },
  {
    listingId: 'l4',
    sellerUsername: 'hiz_tutkunu',
    car: mockCars[4], // Bugatti Chiron
    type: 'sale',
    price: 300,
    condition: 'Kutulu',
    description: 'HW Exotics serisinin en aranan modellerinden. Fiyat sondur.',
  },
    {
    listingId: 'l5',
    sellerUsername: 'garaj_ustasi',
    car: mockCars[5], // Toyota Supra
    type: 'trade',
    price: 'Takas',
    condition: 'İkinci El',
    description: 'J-Imports serisinden. Efsanevi Supra modeli.',
  },
];
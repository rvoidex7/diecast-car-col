import { WantedEntry } from '../types';
import { mockCars } from './mockCars';

export const mockWanted: WantedEntry[] = [
  {
    id: 'w1',
    car: mockCars[8],
    priority: 'yüksek',
    alertActive: true,
    addedAt: '2024-12-01',
    notes: 'Mercedes-AMG One için karton hasarsız olsun.',
    matches: 2,
  },
  {
    id: 'w2',
    car: mockCars[9],
    priority: 'orta',
    alertActive: true,
    addedAt: '2024-10-18',
    notes: 'Rally Legends serisinden sadece sarı renkte arıyorum.',
    matches: 1,
  },
  {
    id: 'w3',
    car: mockCars[6],
    priority: 'yüksek',
    alertActive: true,
    addedAt: '2025-01-09',
    notes: 'Ferrari F40 için üretim hatası stickerlı versiyon peşindeyim.',
    matches: 0,
  },
  {
    id: 'w4',
    car: mockCars[7],
    priority: 'düşük',
    alertActive: false,
    addedAt: '2024-04-03',
    notes: 'McLaren Senna için özel vitrin hazırlayacağım.',
    matches: 3,
  },
];

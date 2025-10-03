import { WantedEntry } from '../types';
import { mockCars } from './mockCars';

export const mockWanted: WantedEntry[] = [
  {
    id: 'w1',
    car: mockCars[4], // Bugatti Chiron
    priority: 'yüksek',
    alertActive: true,
    addedAt: '2024-02-10',
    notes: 'Sadece mavi renk olanı arıyorum.',
    matches: 1,
  },
  {
    id: 'w2',
    car: mockCars[5], // Toyota Supra
    priority: 'orta',
    alertActive: true,
    addedAt: '2023-12-05',
    notes: 'Kutulu ve hasarsız olmalı.',
    matches: 1,
  },
];
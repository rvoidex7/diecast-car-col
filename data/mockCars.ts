import { Car } from '../types';

// Not: Bu resim yolları, kullanıcının daha sonra ekleyeceği varsayılan dosyalara işaret eder.
// Projenin çalışması için bu dosyaların `assets/images/cars/` altında bulunması gerekir.
// Kullanıcı bu dosyaları ekleyene kadar resimler görünmeyecektir.
export const mockCars: Car[] = [
  {
    id: '1',
    name: 'Porsche 911 GT3 RS',
    series: 'HW Exotics',
    year: '2023',
    photo: require('../assets/images/cars/1.png'),
  },
  {
    id: '2',
    name: 'Nissan Skyline GT-R (R34)',
    series: 'Fast & Furious',
    year: '2022',
    photo: require('../assets/images/cars/2.png'),
  },
  {
    id: '3',
    name: 'Lamborghini Countach',
    series: 'Retro Racers',
    year: '2024',
    photo: require('../assets/images/cars/3.png'),
  },
  {
    id: '4',
    name: 'Ford Mustang Shelby GT500',
    series: 'Muscle Mania',
    year: '2021',
    photo: require('../assets/images/cars/4.png'),
  },
    {
    id: '5',
    name: 'Bugatti Chiron',
    series: 'HW Exotics',
    year: '2020',
    photo: require('../assets/images/cars/5.png'),
  },
  {
    id: '6',
    name: 'Toyota Supra',
    series: 'J-Imports',
    year: '2021',
    photo: require('../assets/images/cars/6.png'),
  },
];
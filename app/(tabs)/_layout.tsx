import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        // İki versiyondaki stilleri birleştirelim:
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopWidth: 1,
          borderTopColor: COLORS.gray2,
          height: 60,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      {/* Sekme yapısı olarak en temiz ve doğru olan versiyonu alıyoruz: */}
      <Tabs.Screen
        name="marketplace"
        options={{
          title: 'Pazaryeri',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pricetags-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="mycollection"
        options={{
          title: 'Koleksiyonum',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="car-sport-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wanted"
        options={{
          title: 'Arananlar',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
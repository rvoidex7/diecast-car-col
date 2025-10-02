import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { COLORS } from '../../constants/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
          backgroundColor: COLORS.white,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
      }}
    >
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
        // Bu dosya henüz oluşturulmadı ama yerini hazırlıyoruz.
        name="wanted"
        options={{
          title: 'Arananlar',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        // Bu dosya henüz oluşturulmadı ama yerini hazırlıyoruz.
        name="profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="marketplace"
        options={{
          title: 'Pazaryeri',
          tabBarIcon: ({ color }) => <TabBarIcon name="shopping-bag" color={color} />,
        }}
      />
    </Tabs>
  );
}

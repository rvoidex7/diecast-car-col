import React from 'react';
import { Text, View } from 'react-native';

interface BadgeProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'outline';
  size?: 'sm' | 'md';
}

const variantClasses = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  success: 'bg-green-500/10 text-green-600',
  outline: 'bg-black/5 text-gray-600',
};

const sizeClasses = {
  sm: 'px-2.5 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
};

const Badge = ({ label, variant = 'primary', size = 'md' }: BadgeProps) => {
  const variantClass = variantClasses[variant];
  const sizeClass = sizeClasses[size];

  return (
    <View className={`rounded-full ${variantClass} ${sizeClass}`}>
      <Text className={`font-semibold ${variantClass}`}>{label}</Text>
    </View>
  );
};

export default Badge;
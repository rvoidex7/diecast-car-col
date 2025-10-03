import React from 'react';
import { Text, View } from 'react-native';

type BadgeVariant = 'primary' | 'secondary' | 'outline' | 'success';
type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  outline: 'border border-secondary/40 text-secondary',
  success: 'bg-emerald-100 text-emerald-700',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
};

const Badge: React.FC<BadgeProps> = ({ label, variant = 'secondary', size = 'sm' }) => {
  const containerClass = `rounded-full ${variantStyles[variant]} ${sizeStyles[size]}`;

  return (
    <View className={containerClass}>
      <Text className="font-semibold" numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
};

export default Badge;

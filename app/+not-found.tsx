import { COLORS } from '@/constants/theme';
import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Bu ekran mevcut değil.</Text>

  <Link href={'/(tabs)/marketplace'} style={styles.link}>
          <Text style={styles.linkText}>Ana ekrana dön</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: COLORS.lightWhite,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: COLORS.primary,
  },
});

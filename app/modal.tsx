import { COLORS } from '@/constants/theme';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <Text style={styles.subtitle}>Buraya özel içerikler gelecektir.</Text>

      {/* iOS'ta üst kısımdaki siyah alan için açık statü çubuğu kullan */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightWhite,
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  subtitle: {
    marginTop: 12,
    fontSize: 16,
    color: COLORS.gray,
    textAlign: 'center',
  },
});

import { Container } from '@/components/ui';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

const Navigation = () => (
  <Container gap={12} flexDirection="row" justifyContent="flex-start" style={styles.container}>
    <Link href="/" style={styles.link}>Home</Link>
    <Link href="/about" style={styles.link}>About</Link>
  </Container>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  link: {
    width: 48,
  },
});

export default Navigation;

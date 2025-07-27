import styles from './StatItem.module.css';
import Text from '../atoms/Text.jsx';

export default function StatItem({ stat }) {
  return (
    <li className={styles.statItem}>
      <Text className={`text-black capitalize font-bold ${styles.title}`}>
        {stat.name}
      </Text>
      <Text>{stat.base}</Text>
      <span style={{ width: '5rem' }}>
        {stat.name !== 'total' && <progress value={stat.base} max={255} />}
      </span>
      <Text> {stat.min}</Text>
      <Text> {stat.max}</Text>
    </li>
  );
}

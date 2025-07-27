import styles from './StatItem.module.css';
import Text from '../atoms/Text.jsx';

export default function StatItem({ stat }) {
  return (
    <li className={styles.statItem}>
      <span className={styles.title}>
        <Text className={`text-black capitalize font-bold`}>{stat.name}</Text>
      </span>
      <Text>{stat.base}</Text>
      <span style={{ width: '5rem' }}>
        {stat.name !== 'total' && (
          <progress className={styles.bar} value={stat.base} max={255} />
        )}
      </span>
      <Text> {stat.min}</Text>
      <Text> {stat.max}</Text>
    </li>
  );
}

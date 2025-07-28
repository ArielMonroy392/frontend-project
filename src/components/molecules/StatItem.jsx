import styles from './StatItem.module.css';
import Text from '../atoms/Text.jsx';

export default function StatItem({ stat }) {
  return (
    <li className={styles.statItem}>
      <span className={styles.title}>
        <Text className={`textBlack capitalize fontBold`}>{stat.name}</Text>
      </span>
      <span className={styles.data}>
        <Text>{stat.base}</Text>
      </span>
      <span className={styles.data}>
        {stat.name !== 'total' && (
          <progress className={styles.bar} value={stat.base} max={255} />
        )}
      </span>
      <span className={styles.data}><Text> {stat.min}</Text></span>
      <span className={styles.data}><Text> {stat.max}</Text></span>
    </li>
  );
}

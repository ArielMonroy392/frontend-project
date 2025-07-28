import Text from '../atoms/Text.jsx';
import LinkNav from '../molecules/LinkNav.jsx';
import styles from './ErrorComponent.module.css';

export default function ErrorComponent() {
  return (
    <div className={styles.errorComponent}>
      <Text className=" fontBold textLg" />
      <img
        src={`/error.svg`}
        alt="Error Icon"
        className={styles.errorComponentImg}
      />
      <p className="text-gray-500">Please try again later.</p>
      <LinkNav to={`/`}>
        <Text className="text-blue-500 fontBold">Go to Home</Text>
      </LinkNav>
    </div>
  );
}

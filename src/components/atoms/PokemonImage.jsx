import styles from './PokemonImage.module.css';

const PokemonImage = ({ src, alt, imgHidden = false, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={` ${styles.img} ${imgHidden ? styles.imgHidden : ''}`}
      {...props}
    />
  );
};

export default PokemonImage;

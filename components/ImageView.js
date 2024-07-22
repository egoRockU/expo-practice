import { StyleSheet, Image } from 'react-native';

export default function ImageView({ imgSrc, selectedImage }) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSrc;

  return (
    <Image source={imageSource} style={styles.image} />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
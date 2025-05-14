import {useColorScheme} from 'react-native';
import {colors} from '~utils/colors';
import {
  Item,
  ItemDescription,
  ItemImagePlaceholder,
  ItemTitle,
} from './Artwork.styled';

const Artwork = ({item}) => {
  const currentMode: 'light' | 'dark' = useColorScheme() || 'dark';
  const isDarkMode = currentMode === 'dark';

  return (
    <Item key={item.id}>
      <ItemTitle color={colors[currentMode].text}>{item?.title}</ItemTitle>
      <ItemDescription color={colors[currentMode].text}>
        {item?.thumbnail?.alt_text}
      </ItemDescription>
      <ItemImagePlaceholder
        isDark={isDarkMode}
        source={{
          uri: `https://www.artic.edu/iiif/2/${item?.image_id}/full/1680,/0/default.jpg`,
        }}
      />
    </Item>
  );
};

export default Artwork;

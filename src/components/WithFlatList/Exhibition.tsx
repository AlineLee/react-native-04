import {
  Linking,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {colors} from '~utils/colors';
import {
  Item,
  ItemDescription,
  ItemImagePlaceholder,
  ItemLinkButton,
  ItemTitle,
} from './Exhibition.styled';

const Exhibition = ({item}) => {
  const currentMode: 'light' | 'dark' = useColorScheme() || 'dark';
  const isDarkMode = currentMode === 'dark';

  return (
    <Item key={item.item.id}>
      <ItemTitle color={colors[currentMode].text}>{item?.item.title}</ItemTitle>
      <ItemDescription color={colors[currentMode].text}>
        {item?.item.short_description}
      </ItemDescription>
      <ItemImagePlaceholder
        isDark={isDarkMode}
        source={{uri: item.item?.image_url}}
      />
      {item.item.web_url ? (
        <TouchableOpacity onPress={() => Linking.openURL(item.item.web_url)}>
          <ItemLinkButton>See more</ItemLinkButton>
        </TouchableOpacity>
      ) : null}
    </Item>
  );
};

export default Exhibition;

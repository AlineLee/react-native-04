import {
  Linking,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

import {
  Item,
  ItemDescription,
  ItemImagePlaceholder,
  ItemLinkButton,
  ItemTitle,
} from './WithScroll.styled';
import {colors} from '~utils/colors';

const WithScroll = ({
  data,
  onMomentumScrollEnd,
}: {
  data: [];
  onMomentumScrollEnd: (evt: NativeSyntheticEvent<NativeScrollEvent>) => void;
}) => {
  const currentMode: 'light' | 'dark' = useColorScheme() || 'dark';
  const isDarkMode = currentMode === 'dark';

  return (
    <ScrollView onMomentumScrollEnd={onMomentumScrollEnd}>
      {data?.map((item: any) => (
        <Item key={item.id}>
          <ItemTitle color={colors[currentMode].text}>
            {item?.title}
          </ItemTitle>
          <ItemDescription color={colors[currentMode].text}>
            {item?.short_description}
          </ItemDescription>
          <ItemImagePlaceholder
            isDark={isDarkMode}
            source={{uri: item?.image_url}}
          />
          {item.web_url ? (
            <TouchableOpacity onPress={() => Linking.openURL(item.web_url)}>
              <ItemLinkButton>See more</ItemLinkButton>
            </TouchableOpacity>
          ) : null}
        </Item>
      ))}
    </ScrollView>
  );
};

export default WithScroll;

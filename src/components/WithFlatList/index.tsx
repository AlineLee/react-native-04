import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

import Exhibition from './Exhibition';

const WithFlatList = ({
  data,
  onMomentumScrollEnd,
}: {
  data: [];
  onMomentumScrollEnd: (evt: NativeSyntheticEvent<NativeScrollEvent>) => void;
}) => (
  <FlatList
    onMomentumScrollEnd={onMomentumScrollEnd}
    onEndReachedThreshold={80}
    windowSize={4}
    data={data}
    keyExtractor={item => item.id}
    initialNumToRender={3}
    renderItem={item => <Exhibition item={item} />}
  />
);

export default WithFlatList;

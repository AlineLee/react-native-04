import {FlatList} from 'react-native';

import Artwork from './Artwork';

const ArtworksFlatList = ({data}: {data: []}) => (
  <FlatList
    onEndReachedThreshold={80}
    windowSize={4}
    data={data}
    keyExtractor={item => item.id}
    initialNumToRender={3}
    renderItem={item => <Artwork item={item.item} />}
  />
);

export default ArtworksFlatList;

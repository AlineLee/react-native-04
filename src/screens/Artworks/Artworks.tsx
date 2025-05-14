import * as React from 'react';
import {useColorScheme, SafeAreaView, StatusBar} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {ArtworksShimmer} from '~components';
import {artService} from '~services/artService';
import {colors} from '~utils/colors';
import {Container, Header, SubHeader} from './Artworks.styled';
import ArtworksFlatList from '~components/ArtworksFlatList';

export const Artworks = () => {
  const currentMode: 'light' | 'dark' = useColorScheme() || 'dark';
  const isDarkMode = currentMode === 'dark';

  const backgroundStyle = {
    backgroundColor: colors[currentMode].background,
  };
  const queryOptions = {limit: '50'};
  const {data} = useQuery<any>(
    ['artworks', 'collections/artworks', queryOptions],
    () => artService.fetch('collections/artworks', queryOptions),
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Container>
        <Header color={colors[currentMode].text}>Chicago Art Museum</Header>
        <SubHeader color={colors[currentMode].text}>
          Enjoy some random artpieces from the museum
        </SubHeader>
        {!data ? (
          <ArtworksShimmer colorMode={currentMode} />
        ) : (
          <ArtworksFlatList data={data?.data} />
        )}
      </Container>
    </SafeAreaView>
  );
};

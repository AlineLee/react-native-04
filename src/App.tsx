import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {BottomTabNavigator} from '~navigation/bottom-tab-navigator';
import {usePredefinedSharedValue} from '~components/shimmers/shimmer-effect-provider/useSharedValue';
import {useState} from 'react';
import {Button} from 'react-native';

const queryClient = new QueryClient();

const App = () => {
  const [loadApp, setLoadApp] = useState(false);
  usePredefinedSharedValue();

  if (!loadApp) {
    return <Button title="Load App" onPress={() => setLoadApp(true)} />;
  }

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <BottomTabNavigator />
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;

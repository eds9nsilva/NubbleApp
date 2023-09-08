import {ThemeProvider} from '@shopify/restyle';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {EyeOffIcon} from './src/assets/icons/EyeOffIcon';
import {Button} from './src/components/Button/Button';
import {Text} from './src/components/Text/Text';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge">Edson</Text>
          <Button title="Entrar" preset="primary" disabled marginBottom="s24" />
          <Button title="Entrar" preset="outline" disabled marginBottom="s24" />
          <Button title="Entrar" preset="secondary" marginBottom="s24" />
          <EyeOffIcon />
          <Button title="Entrar" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;

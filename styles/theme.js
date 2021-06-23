import { extendTheme } from '@chakra-ui/react';
import '@fontsource/cormorant-garamond';

const theme = extendTheme({
  fonts: {
    heading: 'Cormorant Garamond',
    body: 'Cormorant Garamond',
  },
  fontWeights: {
    normal: 500,
    medium: 500,
    bold: 500,
  },
});

export default theme;

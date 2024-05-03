import { extendTheme } from '@chakra-ui/react'
import '@fontsource/londrina-solid';

const theme = extendTheme({
    styles: {
    global: {
      'html, body': {
        background: '#6F645B',
        
      },
    },
  },
  fonts: {
    body: `'Londrina Solid', system-ui`,
  },
})

export default theme
import fs from 'fs-extra'
import getTheme from './theme'

console.log('starting')

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './themes/volt-dark.json',
      getTheme({
        color: 'dark',
        name: 'Volt Dark',
      }),
      { spaces: 2 },
    ),
  ]))

console.log('finished')

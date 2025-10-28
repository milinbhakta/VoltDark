import { colorToKeysMap, tokenColors } from './colors';

export default function getTheme(options: { color: 'dark' | 'light'; name: string; black?: boolean }) {
  // const { v, pick } = createThemeHelpers(options)

  const theme: any = {
    "name": "Volt Dark",
    "type": "dark",
    "semanticHighlighting": true,
    "semanticTokenColors": {
      "enumMember": {
        "foreground": "#6dfff8"
      },
      "variable.constant": {
        "foreground": "#cf256d"
      },
      "variable.defaultLibrary": {
        "foreground": "#6dfff8"
      }
    },
    "tokenColors": tokenColors,
    "colors": Object.entries(colorToKeysMap).reduce((acc, [color, keys]) => {
      keys.forEach(key => {
        acc[key] = color;
      });
      return acc;
    }, {} as Record<string, string>),
  };

  return theme
}

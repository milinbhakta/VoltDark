/**
 * Theme Generation Script
 * Builds all theme variants from the color palettes
 */

import fs from 'fs-extra';
import { voltDarkPalette, voltLightPalette } from './palette';
import { buildTheme } from './theme-builder';

console.log('🎨 Building VoltDark themes...\n');

const themes = [
  {
    filename: 'volt-dark.json',
    config: {
      name: 'Volt Dark',
      type: 'dark' as const,
      palette: voltDarkPalette,
      semanticHighlighting: true,
    },
  },
  // Uncomment to generate light theme variant
  // {
  //   filename: 'volt-light.json',
  //   config: {
  //     name: 'Volt Light',
  //     type: 'light' as const,
  //     palette: voltLightPalette,
  //     semanticHighlighting: true,
  //   },
  // },
];

async function generateThemes() {
  await fs.mkdir('./themes', { recursive: true });
  
  for (const { filename, config } of themes) {
    console.log(`📝 Generating ${config.name}...`);
    const theme = buildTheme(config);
    
    await fs.writeJSON(
      `./themes/${filename}`,
      theme,
      { spaces: 2 }
    );
    
    console.log(`✅ ${config.name} saved to themes/${filename}`);
  }
  
  console.log('\n✨ All themes generated successfully!');
}

generateThemes().catch((error) => {
  console.error('❌ Error generating themes:', error);
  process.exit(1);
});

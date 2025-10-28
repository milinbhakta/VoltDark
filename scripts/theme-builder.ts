/**
 * Theme Builder - Main theme generation function
 * Combines all theme components following DRY principle
 */

import { ColorPalette } from './palette';
import { createTokenColors } from './token-colors';
import { createUIColors } from './ui-colors';
import { createSemanticTokenColors } from './semantic-tokens';

/**
 * Theme options for customization
 */
export interface ThemeOptions {
  name: string;
  type: 'dark' | 'light';
  palette: ColorPalette;
  semanticHighlighting?: boolean;
}

/**
 * VS Code Theme JSON structure
 */
export interface VSCodeTheme {
  name: string;
  type: 'dark' | 'light';
  semanticHighlighting: boolean;
  semanticTokenColors: Record<string, any>;
  tokenColors: any[];
  colors: Record<string, string>;
}

/**
 * Build a complete VS Code theme from options
 * 
 * @param options - Theme configuration options
 * @returns Complete VS Code theme object
 * 
 * @example
 * ```typescript
 * const theme = buildTheme({
 *   name: 'Volt Dark',
 *   type: 'dark',
 *   palette: voltDarkPalette,
 *   semanticHighlighting: true
 * });
 * ```
 */
export const buildTheme = (options: ThemeOptions): VSCodeTheme => {
  const {
    name,
    type,
    palette,
    semanticHighlighting = true,
  } = options;
  
  return {
    name,
    type,
    semanticHighlighting,
    semanticTokenColors: createSemanticTokenColors(palette),
    tokenColors: createTokenColors(palette),
    colors: createUIColors(palette),
  };
};

/**
 * Utility function to create theme variants
 * Useful for creating multiple themes from the same base palette
 * 
 * @example
 * ```typescript
 * const variants = createThemeVariants(voltDarkPalette, {
 *   dark: { name: 'Volt Dark', type: 'dark' },
 *   light: { name: 'Volt Light', type: 'light' },
 * });
 * ```
 */
export const createThemeVariants = <T extends Record<string, { name: string; type: 'dark' | 'light' }>>(
  palette: ColorPalette,
  variants: T
): Record<keyof T, VSCodeTheme> => {
  const result = {} as Record<keyof T, VSCodeTheme>;
  
  for (const [key, config] of Object.entries(variants)) {
    result[key as keyof T] = buildTheme({
      ...config,
      palette,
    });
  }
  
  return result;
};

/**
 * Merge theme customizations
 * Allows you to override specific parts of a theme
 * 
 * @example
 * ```typescript
 * const customTheme = mergeTheme(baseTheme, {
 *   colors: {
 *     'editor.background': '#000000',
 *   }
 * });
 * ```
 */
export const mergeTheme = (
  baseTheme: VSCodeTheme,
  customizations: Partial<VSCodeTheme>
): VSCodeTheme => {
  return {
    ...baseTheme,
    ...customizations,
    colors: {
      ...baseTheme.colors,
      ...(customizations.colors || {}),
    },
    semanticTokenColors: {
      ...baseTheme.semanticTokenColors,
      ...(customizations.semanticTokenColors || {}),
    },
    tokenColors: [
      ...baseTheme.tokenColors,
      ...(customizations.tokenColors || []),
    ],
  };
};
